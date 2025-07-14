# Multi-stage build for production deployment
FROM node:18-alpine AS frontend-builder

# Set working directory
WORKDIR /app

# Copy package files
COPY frontend/package*.json ./
COPY shared/package*.json ./shared/

# Install dependencies
RUN npm ci --only=production --no-audit

# Copy source files
COPY frontend/ ./
COPY shared/ ./shared/

# Build frontend
RUN npm run build

# Backend stage
FROM python:3.11-slim AS backend-builder

# Set working directory
WORKDIR /app

# Install system dependencies
RUN apt-get update && apt-get install -y \
    gcc \
    g++ \
    make \
    libffi-dev \
    libssl-dev \
    python3-dev \
    build-essential \
    libpq-dev \
    && rm -rf /var/lib/apt/lists/*

# Copy requirements
COPY backend/requirements*.txt ./

# Install Python dependencies
RUN pip install --no-cache-dir -r requirements.txt && \
    pip install --no-cache-dir -r requirements-ai.txt

# Copy backend source
COPY backend/ ./

# Production stage
FROM python:3.11-slim AS production

# Set environment variables
ENV PYTHONUNBUFFERED=1
ENV PYTHONDONTWRITEBYTECODE=1
ENV FLASK_ENV=production
ENV NODE_ENV=production

# Create non-root user
RUN groupadd -g 1001 flourish && \
    useradd -r -u 1001 -g flourish flourish

# Install runtime dependencies
RUN apt-get update && apt-get install -y \
    libpq5 \
    nginx \
    supervisor \
    curl \
    && rm -rf /var/lib/apt/lists/*

# Create directories
RUN mkdir -p /app/frontend/dist /app/backend /var/log/supervisor /var/run/supervisor

# Copy built frontend from builder
COPY --from=frontend-builder /app/dist /app/frontend/dist

# Copy backend from builder
COPY --from=backend-builder /app /app/backend
COPY --from=backend-builder /usr/local/lib/python3.11/site-packages /usr/local/lib/python3.11/site-packages

# Copy configuration files
COPY docker/nginx.conf /etc/nginx/nginx.conf
COPY docker/supervisord.conf /etc/supervisor/conf.d/supervisord.conf

# Set permissions
RUN chown -R flourish:flourish /app
RUN chmod +x /app/backend/src/main.py

# Switch to non-root user
USER flourish

# Expose ports
EXPOSE 80 443 5000

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:5000/health || exit 1

# Start services
CMD ["/usr/bin/supervisord", "-c", "/etc/supervisor/conf.d/supervisord.conf"]