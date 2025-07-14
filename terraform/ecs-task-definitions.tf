# ECS Task Definitions and Services

# Backend Task Definition
resource "aws_ecs_task_definition" "backend" {
  family                   = "${local.name}-backend"
  network_mode             = "awsvpc"
  requires_compatibilities = ["FARGATE"]
  cpu                      = "2048"
  memory                   = "4096"
  execution_role_arn       = aws_iam_role.ecs_execution.arn
  task_role_arn           = aws_iam_role.ecs_task.arn

  container_definitions = jsonencode([
    {
      name  = "backend"
      image = "${aws_ecr_repository.backend.repository_url}:latest"
      
      portMappings = [
        {
          containerPort = 5000
          protocol      = "tcp"
        }
      ]

      environment = [
        {
          name  = "FLASK_ENV"
          value = var.environment
        },
        {
          name  = "PORT"
          value = "5000"
        },
        {
          name  = "AWS_DEFAULT_REGION"
          value = var.aws_region
        }
      ]

      secrets = [
        {
          name      = "DATABASE_URL"
          valueFrom = "${aws_secretsmanager_secret.app_secrets.arn}:DATABASE_URL::"
        },
        {
          name      = "REDIS_URL"
          valueFrom = "${aws_secretsmanager_secret.app_secrets.arn}:REDIS_URL::"
        },
        {
          name      = "SECRET_KEY"
          valueFrom = "${aws_secretsmanager_secret.app_secrets.arn}:SECRET_KEY::"
        },
        {
          name      = "OPENAI_API_KEY"
          valueFrom = "${aws_secretsmanager_secret.app_secrets.arn}:OPENAI_API_KEY::"
        },
        {
          name      = "ANTHROPIC_API_KEY"
          valueFrom = "${aws_secretsmanager_secret.app_secrets.arn}:ANTHROPIC_API_KEY::"
        }
      ]

      logConfiguration = {
        logDriver = "awslogs"
        options = {
          "awslogs-group"         = aws_cloudwatch_log_group.backend.name
          "awslogs-region"        = var.aws_region
          "awslogs-stream-prefix" = "backend"
        }
      }

      healthCheck = {
        command     = ["CMD-SHELL", "curl -f http://localhost:5000/health || exit 1"]
        interval    = 30
        timeout     = 5
        retries     = 3
        startPeriod = 60
      }

      essential = true
    }
  ])

  tags = {
    Name = "${local.name}-backend-task"
  }
}

# AI Services Task Definition
resource "aws_ecs_task_definition" "ai_services" {
  family                   = "${local.name}-ai-services"
  network_mode             = "awsvpc"
  requires_compatibilities = ["FARGATE"]
  cpu                      = "4096"  # Higher CPU for AI workloads
  memory                   = "8192"  # Higher memory for ML models
  execution_role_arn       = aws_iam_role.ecs_execution.arn
  task_role_arn           = aws_iam_role.ecs_task.arn

  container_definitions = jsonencode([
    {
      name  = "ai-services"
      image = "${aws_ecr_repository.ai_services.repository_url}:latest"
      
      portMappings = [
        {
          containerPort = 8000
          protocol      = "tcp"
        }
      ]

      environment = [
        {
          name  = "ENVIRONMENT"
          value = var.environment
        },
        {
          name  = "PORT"
          value = "8000"
        },
        {
          name  = "AWS_DEFAULT_REGION"
          value = var.aws_region
        },
        {
          name  = "MODEL_CACHE_DIR"
          value = "/tmp/models"
        }
      ]

      secrets = [
        {
          name      = "OPENAI_API_KEY"
          valueFrom = "${aws_secretsmanager_secret.app_secrets.arn}:OPENAI_API_KEY::"
        },
        {
          name      = "ANTHROPIC_API_KEY"
          valueFrom = "${aws_secretsmanager_secret.app_secrets.arn}:ANTHROPIC_API_KEY::"
        },
        {
          name      = "REDIS_URL"
          valueFrom = "${aws_secretsmanager_secret.app_secrets.arn}:REDIS_URL::"
        }
      ]

      logConfiguration = {
        logDriver = "awslogs"
        options = {
          "awslogs-group"         = aws_cloudwatch_log_group.ai_services.name
          "awslogs-region"        = var.aws_region
          "awslogs-stream-prefix" = "ai-services"
        }
      }

      healthCheck = {
        command     = ["CMD-SHELL", "curl -f http://localhost:8000/health || exit 1"]
        interval    = 30
        timeout     = 10
        retries     = 3
        startPeriod = 120  # Longer startup time for AI models
      }

      essential = true

      # Mount for model caching
      mountPoints = [
        {
          sourceVolume  = "model-cache"
          containerPath = "/tmp/models"
          readOnly      = false
        }
      ]
    }
  ])

  volume {
    name = "model-cache"
    
    efs_volume_configuration {
      file_system_id = aws_efs_file_system.model_cache.id
      root_directory = "/"
    }
  }

  tags = {
    Name = "${local.name}-ai-services-task"
  }
}

# EFS for AI model caching
resource "aws_efs_file_system" "model_cache" {
  creation_token = "${local.name}-model-cache"
  
  performance_mode = "generalPurpose"
  throughput_mode  = "provisioned"
  provisioned_throughput_in_mibps = 100

  encrypted = true

  tags = {
    Name = "${local.name}-model-cache"
  }
}

resource "aws_efs_mount_target" "model_cache" {
  count = length(aws_subnet.private)

  file_system_id  = aws_efs_file_system.model_cache.id
  subnet_id       = aws_subnet.private[count.index].id
  security_groups = [aws_security_group.efs.id]
}

resource "aws_security_group" "efs" {
  name        = "${local.name}-efs-sg"
  description = "Security group for EFS"
  vpc_id      = aws_vpc.main.id

  ingress {
    from_port       = 2049
    to_port         = 2049
    protocol        = "tcp"
    security_groups = [aws_security_group.ecs.id]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = {
    Name = "${local.name}-efs-sg"
  }
}

# Backend ECS Service
resource "aws_ecs_service" "backend" {
  name            = "${local.name}-backend"
  cluster         = aws_ecs_cluster.main.id
  task_definition = aws_ecs_task_definition.backend.arn
  desired_count   = 2
  launch_type     = "FARGATE"

  network_configuration {
    subnets          = aws_subnet.private[*].id
    security_groups  = [aws_security_group.ecs.id]
    assign_public_ip = false
  }

  load_balancer {
    target_group_arn = aws_lb_target_group.backend.arn
    container_name   = "backend"
    container_port   = 5000
  }

  deployment_configuration {
    maximum_percent         = 200
    minimum_healthy_percent = 50
    
    deployment_circuit_breaker {
      enable   = true
      rollback = true
    }
  }

  service_registries {
    registry_arn = aws_service_discovery_service.backend.arn
  }

  depends_on = [aws_lb_listener.https]

  tags = {
    Name = "${local.name}-backend-service"
  }
}

# AI Services ECS Service
resource "aws_ecs_service" "ai_services" {
  name            = "${local.name}-ai-services"
  cluster         = aws_ecs_cluster.main.id
  task_definition = aws_ecs_task_definition.ai_services.arn
  desired_count   = 1  # Start with 1 for cost optimization
  launch_type     = "FARGATE"

  network_configuration {
    subnets          = aws_subnet.private[*].id
    security_groups  = [aws_security_group.ecs.id]
    assign_public_ip = false
  }

  deployment_configuration {
    maximum_percent         = 200
    minimum_healthy_percent = 0  # Allow full replacement for AI services
    
    deployment_circuit_breaker {
      enable   = true
      rollback = true
    }
  }

  service_registries {
    registry_arn = aws_service_discovery_service.ai_services.arn
  }

  tags = {
    Name = "${local.name}-ai-services-service"
  }
}

# Service Discovery
resource "aws_service_discovery_private_dns_namespace" "main" {
  name        = "${local.name}.local"
  description = "Private DNS namespace for ${local.name}"
  vpc         = aws_vpc.main.id

  tags = {
    Name = "${local.name}-service-discovery"
  }
}

resource "aws_service_discovery_service" "backend" {
  name = "backend"

  dns_config {
    namespace_id = aws_service_discovery_private_dns_namespace.main.id

    dns_records {
      ttl  = 10
      type = "A"
    }

    routing_policy = "MULTIVALUE"
  }

  health_check_grace_period_seconds = 30

  tags = {
    Name = "${local.name}-backend-discovery"
  }
}

resource "aws_service_discovery_service" "ai_services" {
  name = "ai-services"

  dns_config {
    namespace_id = aws_service_discovery_private_dns_namespace.main.id

    dns_records {
      ttl  = 10
      type = "A"
    }

    routing_policy = "MULTIVALUE"
  }

  health_check_grace_period_seconds = 60

  tags = {
    Name = "${local.name}-ai-services-discovery"
  }
}

# Target Groups for AI Services
resource "aws_lb_target_group" "ai_services" {
  name     = "${local.name}-ai-services-tg"
  port     = 8000
  protocol = "HTTP"
  vpc_id   = aws_vpc.main.id
  target_type = "ip"

  health_check {
    enabled             = true
    healthy_threshold   = 2
    unhealthy_threshold = 3
    timeout             = 10
    interval            = 60
    path                = "/health"
    matcher             = "200"
    port                = "traffic-port"
    protocol            = "HTTP"
  }

  tags = {
    Name = "${local.name}-ai-services-tg"
  }
}

# ALB Listener Rule for AI Services
resource "aws_lb_listener_rule" "ai_services" {
  listener_arn = aws_lb_listener.https.arn
  priority     = 200

  action {
    type             = "forward"
    target_group_arn = aws_lb_target_group.ai_services.arn
  }

  condition {
    path_pattern {
      values = ["/api/v1/ai/*"]
    }
  }
}

# Auto Scaling for AI Services
resource "aws_appautoscaling_target" "ecs_ai_services" {
  max_capacity       = 5
  min_capacity       = 1
  resource_id        = "service/${aws_ecs_cluster.main.name}/${aws_ecs_service.ai_services.name}"
  scalable_dimension = "ecs:service:DesiredCount"
  service_namespace  = "ecs"
}

resource "aws_appautoscaling_policy" "ecs_ai_services_cpu" {
  name               = "${local.name}-ai-services-cpu-scaling"
  policy_type        = "TargetTrackingScaling"
  resource_id        = aws_appautoscaling_target.ecs_ai_services.resource_id
  scalable_dimension = aws_appautoscaling_target.ecs_ai_services.scalable_dimension
  service_namespace  = aws_appautoscaling_target.ecs_ai_services.service_namespace

  target_tracking_scaling_policy_configuration {
    predefined_metric_specification {
      predefined_metric_type = "ECSServiceAverageCPUUtilization"
    }
    target_value = 60.0  # Lower threshold for AI services
  }
}

# Custom metric scaling for AI services based on queue length
resource "aws_appautoscaling_policy" "ecs_ai_services_queue" {
  name               = "${local.name}-ai-services-queue-scaling"
  policy_type        = "TargetTrackingScaling"
  resource_id        = aws_appautoscaling_target.ecs_ai_services.resource_id
  scalable_dimension = aws_appautoscaling_target.ecs_ai_services.scalable_dimension
  service_namespace  = aws_appautoscaling_target.ecs_ai_services.service_namespace

  target_tracking_scaling_policy_configuration {
    customized_metric_specification {
      metric_name = "QueueLength"
      namespace   = "Flourish/AI"
      statistic   = "Average"
    }
    target_value = 10.0
  }
}

# CloudWatch Alarms
resource "aws_cloudwatch_metric_alarm" "backend_cpu_high" {
  alarm_name          = "${local.name}-backend-cpu-high"
  comparison_operator = "GreaterThanThreshold"
  evaluation_periods  = "2"
  metric_name         = "CPUUtilization"
  namespace           = "AWS/ECS"
  period              = "120"
  statistic           = "Average"
  threshold           = "80"
  alarm_description   = "This metric monitors backend CPU utilization"
  alarm_actions       = [aws_sns_topic.alerts.arn]

  dimensions = {
    ServiceName = aws_ecs_service.backend.name
    ClusterName = aws_ecs_cluster.main.name
  }

  tags = {
    Name = "${local.name}-backend-cpu-alarm"
  }
}

resource "aws_cloudwatch_metric_alarm" "ai_services_memory_high" {
  alarm_name          = "${local.name}-ai-services-memory-high"
  comparison_operator = "GreaterThanThreshold"
  evaluation_periods  = "2"
  metric_name         = "MemoryUtilization"
  namespace           = "AWS/ECS"
  period              = "120"
  statistic           = "Average"
  threshold           = "85"
  alarm_description   = "This metric monitors AI services memory utilization"
  alarm_actions       = [aws_sns_topic.alerts.arn]

  dimensions = {
    ServiceName = aws_ecs_service.ai_services.name
    ClusterName = aws_ecs_cluster.main.name
  }

  tags = {
    Name = "${local.name}-ai-services-memory-alarm"
  }
}

# SNS Topic for Alerts
resource "aws_sns_topic" "alerts" {
  name = "${local.name}-alerts"

  tags = {
    Name = "${local.name}-alerts"
  }
}

# Add to load balancer target groups
resource "aws_lb_target_group_attachment" "ai_services" {
  target_group_arn = aws_lb_target_group.ai_services.arn
  target_id        = aws_ecs_service.ai_services.id
  port             = 8000
}