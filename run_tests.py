#!/usr/bin/env python3
"""
Comprehensive Test Runner for Flourish AI Relationship Platform
Executes all tests systematically and generates detailed reports
"""

import subprocess
import sys
import os
import json
import time
from datetime import datetime
from pathlib import Path
import argparse

class TestRunner:
    def __init__(self):
        self.results = {
            'start_time': datetime.now().isoformat(),
            'test_suites': {},
            'summary': {},
            'coverage': {},
            'performance': {}
        }
        
    def run_backend_tests(self):
        """Run comprehensive backend tests"""
        print("🔧 Running Backend Tests...")
        
        # Install test dependencies
        subprocess.run([
            sys.executable, '-m', 'pip', 'install', '-r', 'backend/requirements-test.txt'
        ], cwd='.')
        
        # Run pytest with comprehensive options
        backend_result = subprocess.run([
            'python', '-m', 'pytest', 
            'backend/tests/',
            '-v',
            '--tb=short',
            '--cov=backend/src',
            '--cov-report=html:backend/htmlcov',
            '--cov-report=json:backend/coverage.json',
            '--html=backend/test_report.html',
            '--self-contained-html',
            '--json-report',
            '--json-report-file=backend/test_results.json',
            '--benchmark-only',
            '--benchmark-json=backend/benchmark_results.json'
        ], cwd='.', capture_output=True, text=True)
        
        self.results['test_suites']['backend'] = {
            'exit_code': backend_result.returncode,
            'stdout': backend_result.stdout,
            'stderr': backend_result.stderr,
            'duration': self._parse_duration(backend_result.stdout)
        }
        
        return backend_result.returncode == 0
    
    def run_frontend_tests(self):
        """Run comprehensive frontend tests"""
        print("⚛️ Running Frontend Tests...")
        
        # Install frontend dependencies
        subprocess.run(['npm', 'install'], cwd='frontend')
        
        # Run Jest tests
        frontend_result = subprocess.run([
            'npm', 'test', '--', 
            '--coverage',
            '--watchAll=false',
            '--json',
            '--outputFile=test_results.json'
        ], cwd='frontend', capture_output=True, text=True)
        
        self.results['test_suites']['frontend'] = {
            'exit_code': frontend_result.returncode,
            'stdout': frontend_result.stdout,
            'stderr': frontend_result.stderr,
            'duration': self._parse_duration(frontend_result.stdout)
        }
        
        return frontend_result.returncode == 0
    
    def run_integration_tests(self):
        """Run end-to-end integration tests"""
        print("🔄 Running Integration Tests...")
        
        # Start backend server for integration tests
        backend_process = subprocess.Popen([
            sys.executable, '-m', 'flask', 'run', '--port=5000'
        ], cwd='backend', env={**os.environ, 'FLASK_ENV': 'testing'})
        
        # Start frontend server for integration tests
        frontend_process = subprocess.Popen([
            'npm', 'start'
        ], cwd='frontend', env={**os.environ, 'CI': 'true'})
        
        # Wait for servers to start
        time.sleep(10)
        
        try:
            # Run end-to-end tests
            e2e_result = subprocess.run([
                'python', '-m', 'pytest',
                'tests/integration/',
                '-v',
                '--tb=short',
                '--html=integration_test_report.html'
            ], cwd='.', capture_output=True, text=True)
            
            self.results['test_suites']['integration'] = {
                'exit_code': e2e_result.returncode,
                'stdout': e2e_result.stdout,
                'stderr': e2e_result.stderr,
                'duration': self._parse_duration(e2e_result.stdout)
            }
            
            return e2e_result.returncode == 0
            
        finally:
            # Clean up processes
            backend_process.terminate()
            frontend_process.terminate()
    
    def run_load_tests(self):
        """Run load and performance tests"""
        print("⚡ Running Load Tests...")
        
        # Run Locust load tests
        load_result = subprocess.run([
            'python', '-m', 'locust',
            '-f', 'tests/load/locustfile.py',
            '--headless',
            '--users=50',
            '--spawn-rate=5',
            '--run-time=30s',
            '--host=http://localhost:5000',
            '--html=load_test_report.html'
        ], cwd='.', capture_output=True, text=True)
        
        self.results['test_suites']['load'] = {
            'exit_code': load_result.returncode,
            'stdout': load_result.stdout,
            'stderr': load_result.stderr,
            'duration': self._parse_duration(load_result.stdout)
        }
        
        return load_result.returncode == 0
    
    def run_security_tests(self):
        """Run security and vulnerability tests"""
        print("🛡️ Running Security Tests...")
        
        # Run Bandit security linting
        bandit_result = subprocess.run([
            'bandit', '-r', 'backend/src/', '-f', 'json', '-o', 'bandit_report.json'
        ], cwd='.', capture_output=True, text=True)
        
        # Run Safety dependency vulnerability check
        safety_result = subprocess.run([
            'safety', 'check', '--json', '--output=safety_report.json'
        ], cwd='.', capture_output=True, text=True)
        
        self.results['test_suites']['security'] = {
            'bandit': {
                'exit_code': bandit_result.returncode,
                'stdout': bandit_result.stdout,
                'stderr': bandit_result.stderr
            },
            'safety': {
                'exit_code': safety_result.returncode,
                'stdout': safety_result.stdout,
                'stderr': safety_result.stderr
            }
        }
        
        return bandit_result.returncode == 0 and safety_result.returncode == 0
    
    def run_ai_specific_tests(self):
        """Run AI/ML specific tests"""
        print("🤖 Running AI System Tests...")
        
        # Run AI-specific test suite
        ai_result = subprocess.run([
            'python', '-m', 'pytest',
            'backend/tests/test_advanced_ai_manager.py',
            '-v',
            '--tb=short',
            '--benchmark-only',
            '--benchmark-json=ai_benchmark_results.json'
        ], cwd='.', capture_output=True, text=True)
        
        self.results['test_suites']['ai'] = {
            'exit_code': ai_result.returncode,
            'stdout': ai_result.stdout,
            'stderr': ai_result.stderr,
            'duration': self._parse_duration(ai_result.stdout)
        }
        
        return ai_result.returncode == 0
    
    def generate_coverage_report(self):
        """Generate comprehensive coverage report"""
        print("📊 Generating Coverage Report...")
        
        # Combine backend and frontend coverage
        try:
            # Load backend coverage
            with open('backend/coverage.json', 'r') as f:
                backend_coverage = json.load(f)
            
            # Load frontend coverage (if exists)
            frontend_coverage = {}
            if os.path.exists('frontend/coverage/coverage-summary.json'):
                with open('frontend/coverage/coverage-summary.json', 'r') as f:
                    frontend_coverage = json.load(f)
            
            self.results['coverage'] = {
                'backend': backend_coverage.get('totals', {}),
                'frontend': frontend_coverage.get('total', {}),
                'combined_score': self._calculate_combined_coverage(backend_coverage, frontend_coverage)
            }
            
        except Exception as e:
            print(f"Warning: Could not generate coverage report: {e}")
    
    def generate_performance_report(self):
        """Generate performance and benchmark report"""
        print("📈 Generating Performance Report...")
        
        try:
            # Load backend benchmarks
            with open('backend/benchmark_results.json', 'r') as f:
                backend_benchmarks = json.load(f)
            
            # Load AI benchmarks
            with open('ai_benchmark_results.json', 'r') as f:
                ai_benchmarks = json.load(f)
            
            self.results['performance'] = {
                'backend': backend_benchmarks,
                'ai': ai_benchmarks,
                'critical_metrics': self._extract_critical_metrics(backend_benchmarks, ai_benchmarks)
            }
            
        except Exception as e:
            print(f"Warning: Could not generate performance report: {e}")
    
    def generate_summary_report(self):
        """Generate final summary report"""
        print("📋 Generating Summary Report...")
        
        total_tests = 0
        passed_tests = 0
        failed_tests = 0
        
        for suite_name, suite_result in self.results['test_suites'].items():
            if isinstance(suite_result, dict) and 'exit_code' in suite_result:
                if suite_result['exit_code'] == 0:
                    passed_tests += 1
                else:
                    failed_tests += 1
                total_tests += 1
        
        self.results['summary'] = {
            'total_test_suites': total_tests,
            'passed_suites': passed_tests,
            'failed_suites': failed_tests,
            'success_rate': (passed_tests / total_tests * 100) if total_tests > 0 else 0,
            'end_time': datetime.now().isoformat(),
            'total_duration': self._calculate_total_duration(),
            'overall_status': 'PASS' if failed_tests == 0 else 'FAIL'
        }
    
    def save_results(self):
        """Save test results to JSON file"""
        with open('test_results_summary.json', 'w') as f:
            json.dump(self.results, f, indent=2)
        
        print(f"\n📄 Test results saved to: test_results_summary.json")
    
    def print_summary(self):
        """Print test summary to console"""
        summary = self.results['summary']
        
        print("\n" + "="*60)
        print("🎯 FLOURISH AI PLATFORM - TEST SUMMARY")
        print("="*60)
        print(f"Overall Status: {'✅ PASS' if summary['overall_status'] == 'PASS' else '❌ FAIL'}")
        print(f"Total Test Suites: {summary['total_test_suites']}")
        print(f"Passed: {summary['passed_suites']}")
        print(f"Failed: {summary['failed_suites']}")
        print(f"Success Rate: {summary['success_rate']:.1f}%")
        print(f"Total Duration: {summary['total_duration']}")
        
        print("\n📊 Test Suite Results:")
        for suite_name, suite_result in self.results['test_suites'].items():
            if isinstance(suite_result, dict) and 'exit_code' in suite_result:
                status = "✅ PASS" if suite_result['exit_code'] == 0 else "❌ FAIL"
                duration = suite_result.get('duration', 'N/A')
                print(f"  {suite_name.upper()}: {status} ({duration})")
        
        if 'coverage' in self.results and self.results['coverage']:
            print(f"\n📈 Coverage Score: {self.results['coverage'].get('combined_score', 'N/A')}%")
        
        print("="*60)
    
    def _parse_duration(self, output):
        """Parse duration from test output"""
        # Simple duration parsing - can be enhanced
        if 'seconds' in output:
            return output.split('seconds')[0].split()[-1] + 's'
        return 'N/A'
    
    def _calculate_combined_coverage(self, backend_cov, frontend_cov):
        """Calculate combined coverage score"""
        try:
            backend_score = backend_cov.get('totals', {}).get('percent_covered', 0)
            frontend_score = frontend_cov.get('total', {}).get('lines', {}).get('pct', 0)
            return (backend_score + frontend_score) / 2
        except:
            return 0
    
    def _extract_critical_metrics(self, backend_benchmarks, ai_benchmarks):
        """Extract critical performance metrics"""
        return {
            'ai_response_time': 'N/A',  # Would extract from actual benchmarks
            'api_latency': 'N/A',
            'memory_usage': 'N/A',
            'throughput': 'N/A'
        }
    
    def _calculate_total_duration(self):
        """Calculate total test execution time"""
        start = datetime.fromisoformat(self.results['start_time'])
        end = datetime.now()
        return str(end - start)

def main():
    parser = argparse.ArgumentParser(description='Run comprehensive tests for Flourish AI Platform')
    parser.add_argument('--suite', choices=['backend', 'frontend', 'integration', 'load', 'security', 'ai', 'all'], 
                       default='all', help='Test suite to run')
    parser.add_argument('--skip-load', action='store_true', help='Skip load testing')
    parser.add_argument('--skip-security', action='store_true', help='Skip security testing')
    
    args = parser.parse_args()
    
    runner = TestRunner()
    
    print("🚀 Starting Comprehensive Test Suite for Flourish AI Platform")
    print("="*60)
    
    success = True
    
    if args.suite == 'all':
        # Run all test suites
        if not runner.run_backend_tests():
            success = False
        if not runner.run_frontend_tests():
            success = False
        if not runner.run_integration_tests():
            success = False
        if not runner.run_ai_specific_tests():
            success = False
        if not args.skip_load and not runner.run_load_tests():
            success = False
        if not args.skip_security and not runner.run_security_tests():
            success = False
    else:
        # Run specific test suite
        if args.suite == 'backend':
            success = runner.run_backend_tests()
        elif args.suite == 'frontend':
            success = runner.run_frontend_tests()
        elif args.suite == 'integration':
            success = runner.run_integration_tests()
        elif args.suite == 'load':
            success = runner.run_load_tests()
        elif args.suite == 'security':
            success = runner.run_security_tests()
        elif args.suite == 'ai':
            success = runner.run_ai_specific_tests()
    
    # Generate reports
    runner.generate_coverage_report()
    runner.generate_performance_report()
    runner.generate_summary_report()
    runner.save_results()
    runner.print_summary()
    
    # Exit with appropriate code
    sys.exit(0 if success else 1)

if __name__ == "__main__":
    main()