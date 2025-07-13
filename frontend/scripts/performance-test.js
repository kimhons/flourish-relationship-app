#!/usr/bin/env node

/**
 * Performance Testing Script for Flourish App
 * Automated performance validation and reporting
 */

const puppeteer = require('puppeteer');
const lighthouse = require('lighthouse');
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Configuration
const CONFIG = {
  baseUrl: process.env.BASE_URL || 'http://localhost:3000',
  outputDir: './performance-reports',
  testPages: [
    { name: 'Landing Page', url: '/' },
    { name: 'Dashboard', url: '/dashboard' },
    { name: 'Discover', url: '/discover' },
    { name: 'Matches', url: '/matches' },
    { name: 'Messages', url: '/messages' },
    { name: 'Profile', url: '/profile' }
  ],
  thresholds: {
    performance: 85,
    accessibility: 90,
    bestPractices: 85,
    seo: 85,
    firstContentfulPaint: 2000,
    largestContentfulPaint: 4000,
    timeToInteractive: 3000,
    cumulativeLayoutShift: 0.1,
    speedIndex: 3000
  }
};

class PerformanceTest {
  constructor() {
    this.results = [];
    this.summary = {
      totalTests: 0,
      passedTests: 0,
      failedTests: 0,
      averageScores: {},
      startTime: Date.now(),
      endTime: null
    };
    
    // Ensure output directory exists
    if (!fs.existsSync(CONFIG.outputDir)) {
      fs.mkdirSync(CONFIG.outputDir, { recursive: true });
    }
  }

  async runTests() {
    console.log('🚀 Starting Performance Tests...');
    console.log(`Base URL: ${CONFIG.baseUrl}`);
    console.log(`Testing ${CONFIG.testPages.length} pages`);

    for (const page of CONFIG.testPages) {
      console.log(`\n📊 Testing: ${page.name} (${page.url})`);
      
      try {
        const result = await this.testPage(page);
        this.results.push(result);
        this.summary.totalTests++;
        
        if (result.passed) {
          this.summary.passedTests++;
          console.log(`✅ ${page.name} - PASSED`);
        } else {
          this.summary.failedTests++;
          console.log(`❌ ${page.name} - FAILED`);
        }
      } catch (error) {
        console.error(`❌ Error testing ${page.name}:`, error.message);
        this.summary.failedTests++;
      }
    }

    this.summary.endTime = Date.now();
    this.calculateAverageScores();
    
    await this.generateReport();
    
    console.log('\n📈 Performance Test Summary:');
    console.log(`Total Tests: ${this.summary.totalTests}`);
    console.log(`Passed: ${this.summary.passedTests}`);
    console.log(`Failed: ${this.summary.failedTests}`);
    console.log(`Success Rate: ${(this.summary.passedTests / this.summary.totalTests * 100).toFixed(1)}%`);
  }

  async testPage(pageConfig) {
    const browser = await puppeteer.launch({ 
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    
    try {
      const page = await browser.newPage();
      
      // Set up performance monitoring
      await page.evaluateOnNewDocument(() => {
        window.performanceMetrics = {
          navigationStart: 0,
          domContentLoaded: 0,
          loadComplete: 0,
          firstPaint: 0,
          firstContentfulPaint: 0
        };
      });

      // Navigate to page
      const startTime = Date.now();
      const response = await page.goto(`${CONFIG.baseUrl}${pageConfig.url}`, {
        waitUntil: 'networkidle2',
        timeout: 30000
      });
      
      const loadTime = Date.now() - startTime;

      // Collect performance metrics
      const metrics = await page.evaluate(() => {
        const navigation = performance.getEntriesByType('navigation')[0];
        const paint = performance.getEntriesByType('paint');
        
        return {
          navigationStart: navigation.navigationStart,
          domContentLoaded: navigation.domContentLoadedEventEnd - navigation.navigationStart,
          loadComplete: navigation.loadEventEnd - navigation.navigationStart,
          firstPaint: paint.find(p => p.name === 'first-paint')?.startTime || 0,
          firstContentfulPaint: paint.find(p => p.name === 'first-contentful-paint')?.startTime || 0,
          memoryUsage: performance.memory ? performance.memory.usedJSHeapSize / 1024 / 1024 : 0,
          resourceCount: performance.getEntriesByType('resource').length
        };
      });

      // Run Lighthouse audit
      const lighthouseResult = await this.runLighthouseAudit(pageConfig.url);
      
      // Analyze results
      const result = {
        page: pageConfig.name,
        url: pageConfig.url,
        timestamp: new Date().toISOString(),
        loadTime: loadTime,
        metrics: metrics,
        lighthouse: lighthouseResult,
        passed: this.evaluateResults(metrics, lighthouseResult),
        issues: this.identifyIssues(metrics, lighthouseResult)
      };

      return result;
    } finally {
      await browser.close();
    }
  }

  async runLighthouseAudit(url) {
    try {
      const browser = await puppeteer.launch({ 
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
      });
      
      const { lhr } = await lighthouse(`${CONFIG.baseUrl}${url}`, {
        port: new URL(browser.wsEndpoint()).port,
        output: 'json',
        logLevel: 'info'
      });
      
      await browser.close();
      
      return {
        performance: lhr.categories.performance.score * 100,
        accessibility: lhr.categories.accessibility.score * 100,
        bestPractices: lhr.categories['best-practices'].score * 100,
        seo: lhr.categories.seo.score * 100,
        firstContentfulPaint: lhr.audits['first-contentful-paint'].numericValue,
        largestContentfulPaint: lhr.audits['largest-contentful-paint'].numericValue,
        timeToInteractive: lhr.audits['interactive'].numericValue,
        speedIndex: lhr.audits['speed-index'].numericValue,
        cumulativeLayoutShift: lhr.audits['cumulative-layout-shift'].numericValue
      };
    } catch (error) {
      console.warn(`Lighthouse audit failed for ${url}:`, error.message);
      return null;
    }
  }

  evaluateResults(metrics, lighthouse) {
    if (!lighthouse) return false;
    
    const checks = [
      lighthouse.performance >= CONFIG.thresholds.performance,
      lighthouse.accessibility >= CONFIG.thresholds.accessibility,
      lighthouse.bestPractices >= CONFIG.thresholds.bestPractices,
      lighthouse.seo >= CONFIG.thresholds.seo,
      lighthouse.firstContentfulPaint <= CONFIG.thresholds.firstContentfulPaint,
      lighthouse.largestContentfulPaint <= CONFIG.thresholds.largestContentfulPaint,
      lighthouse.timeToInteractive <= CONFIG.thresholds.timeToInteractive,
      lighthouse.cumulativeLayoutShift <= CONFIG.thresholds.cumulativeLayoutShift,
      lighthouse.speedIndex <= CONFIG.thresholds.speedIndex
    ];
    
    return checks.every(check => check);
  }

  identifyIssues(metrics, lighthouse) {
    const issues = [];
    
    if (!lighthouse) {
      issues.push('Lighthouse audit failed');
      return issues;
    }
    
    if (lighthouse.performance < CONFIG.thresholds.performance) {
      issues.push(`Performance score too low: ${lighthouse.performance}`);
    }
    
    if (lighthouse.firstContentfulPaint > CONFIG.thresholds.firstContentfulPaint) {
      issues.push(`First Contentful Paint too slow: ${lighthouse.firstContentfulPaint}ms`);
    }
    
    if (lighthouse.largestContentfulPaint > CONFIG.thresholds.largestContentfulPaint) {
      issues.push(`Largest Contentful Paint too slow: ${lighthouse.largestContentfulPaint}ms`);
    }
    
    if (lighthouse.timeToInteractive > CONFIG.thresholds.timeToInteractive) {
      issues.push(`Time to Interactive too slow: ${lighthouse.timeToInteractive}ms`);
    }
    
    if (lighthouse.cumulativeLayoutShift > CONFIG.thresholds.cumulativeLayoutShift) {
      issues.push(`Cumulative Layout Shift too high: ${lighthouse.cumulativeLayoutShift}`);
    }
    
    if (lighthouse.speedIndex > CONFIG.thresholds.speedIndex) {
      issues.push(`Speed Index too slow: ${lighthouse.speedIndex}`);
    }
    
    return issues;
  }

  calculateAverageScores() {
    const totals = {
      performance: 0,
      accessibility: 0,
      bestPractices: 0,
      seo: 0,
      firstContentfulPaint: 0,
      largestContentfulPaint: 0,
      timeToInteractive: 0,
      speedIndex: 0
    };
    
    let validResults = 0;
    
    this.results.forEach(result => {
      if (result.lighthouse) {
        Object.keys(totals).forEach(key => {
          totals[key] += result.lighthouse[key] || 0;
        });
        validResults++;
      }
    });
    
    if (validResults > 0) {
      Object.keys(totals).forEach(key => {
        this.summary.averageScores[key] = totals[key] / validResults;
      });
    }
  }

  async generateReport() {
    const reportData = {
      summary: this.summary,
      results: this.results,
      configuration: CONFIG,
      timestamp: new Date().toISOString()
    };
    
    // Generate JSON report
    const jsonReport = path.join(CONFIG.outputDir, `performance-report-${Date.now()}.json`);
    fs.writeFileSync(jsonReport, JSON.stringify(reportData, null, 2));
    
    // Generate HTML report
    const htmlReport = path.join(CONFIG.outputDir, `performance-report-${Date.now()}.html`);
    fs.writeFileSync(htmlReport, this.generateHTMLReport(reportData));
    
    // Generate CSV report
    const csvReport = path.join(CONFIG.outputDir, `performance-report-${Date.now()}.csv`);
    fs.writeFileSync(csvReport, this.generateCSVReport(reportData));
    
    console.log(`\n📊 Reports generated:`);
    console.log(`- JSON: ${jsonReport}`);
    console.log(`- HTML: ${htmlReport}`);
    console.log(`- CSV: ${csvReport}`);
  }

  generateHTMLReport(data) {
    const html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Performance Test Report - Flourish App</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 20px; background: #f5f5f5; }
        .container { max-width: 1200px; margin: 0 auto; background: white; padding: 20px; border-radius: 8px; }
        h1, h2 { color: #333; }
        .summary { background: #f8f9fa; padding: 20px; border-radius: 6px; margin: 20px 0; }
        .metrics { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; }
        .metric-card { background: #fff; border: 1px solid #ddd; padding: 15px; border-radius: 6px; }
        .passed { color: #28a745; }
        .failed { color: #dc3545; }
        .warning { color: #ffc107; }
        table { width: 100%; border-collapse: collapse; margin: 20px 0; }
        th, td { padding: 10px; text-align: left; border-bottom: 1px solid #ddd; }
        th { background: #f8f9fa; }
        .score { font-weight: bold; font-size: 1.1em; }
        .issues { background: #f8d7da; padding: 10px; border-radius: 4px; margin: 5px 0; }
    </style>
</head>
<body>
    <div class="container">
        <h1>🚀 Performance Test Report - Flourish App</h1>
        <p>Generated: ${data.timestamp}</p>
        
        <div class="summary">
            <h2>📊 Test Summary</h2>
            <div class="metrics">
                <div class="metric-card">
                    <h3>Overall Results</h3>
                    <p>Total Tests: ${data.summary.totalTests}</p>
                    <p class="passed">Passed: ${data.summary.passedTests}</p>
                    <p class="failed">Failed: ${data.summary.failedTests}</p>
                    <p>Success Rate: ${((data.summary.passedTests / data.summary.totalTests) * 100).toFixed(1)}%</p>
                </div>
                
                <div class="metric-card">
                    <h3>Average Scores</h3>
                    <p>Performance: <span class="score">${data.summary.averageScores.performance?.toFixed(1) || 'N/A'}</span></p>
                    <p>Accessibility: <span class="score">${data.summary.averageScores.accessibility?.toFixed(1) || 'N/A'}</span></p>
                    <p>Best Practices: <span class="score">${data.summary.averageScores.bestPractices?.toFixed(1) || 'N/A'}</span></p>
                    <p>SEO: <span class="score">${data.summary.averageScores.seo?.toFixed(1) || 'N/A'}</span></p>
                </div>
                
                <div class="metric-card">
                    <h3>Core Web Vitals (Average)</h3>
                    <p>First Contentful Paint: ${data.summary.averageScores.firstContentfulPaint?.toFixed(0) || 'N/A'}ms</p>
                    <p>Largest Contentful Paint: ${data.summary.averageScores.largestContentfulPaint?.toFixed(0) || 'N/A'}ms</p>
                    <p>Time to Interactive: ${data.summary.averageScores.timeToInteractive?.toFixed(0) || 'N/A'}ms</p>
                    <p>Speed Index: ${data.summary.averageScores.speedIndex?.toFixed(0) || 'N/A'}</p>
                </div>
            </div>
        </div>
        
        <h2>📋 Detailed Results</h2>
        <table>
            <thead>
                <tr>
                    <th>Page</th>
                    <th>Status</th>
                    <th>Performance</th>
                    <th>FCP (ms)</th>
                    <th>LCP (ms)</th>
                    <th>TTI (ms)</th>
                    <th>Issues</th>
                </tr>
            </thead>
            <tbody>
                ${data.results.map(result => `
                    <tr>
                        <td>${result.page}</td>
                        <td class="${result.passed ? 'passed' : 'failed'}">
                            ${result.passed ? '✅ PASS' : '❌ FAIL'}
                        </td>
                        <td>${result.lighthouse?.performance?.toFixed(1) || 'N/A'}</td>
                        <td>${result.lighthouse?.firstContentfulPaint?.toFixed(0) || 'N/A'}</td>
                        <td>${result.lighthouse?.largestContentfulPaint?.toFixed(0) || 'N/A'}</td>
                        <td>${result.lighthouse?.timeToInteractive?.toFixed(0) || 'N/A'}</td>
                        <td>
                            ${result.issues.length > 0 ? `<div class="issues">${result.issues.join('<br>')}</div>` : 'None'}
                        </td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
        
        <h2>🎯 Recommendations</h2>
        <div class="recommendations">
            ${this.generateRecommendations(data)}
        </div>
    </div>
</body>
</html>`;
    
    return html;
  }

  generateCSVReport(data) {
    const headers = [
      'Page',
      'URL',
      'Timestamp',
      'Passed',
      'Performance',
      'Accessibility',
      'Best Practices',
      'SEO',
      'First Contentful Paint',
      'Largest Contentful Paint',
      'Time to Interactive',
      'Speed Index',
      'Issues'
    ];
    
    const rows = data.results.map(result => [
      result.page,
      result.url,
      result.timestamp,
      result.passed,
      result.lighthouse?.performance || '',
      result.lighthouse?.accessibility || '',
      result.lighthouse?.bestPractices || '',
      result.lighthouse?.seo || '',
      result.lighthouse?.firstContentfulPaint || '',
      result.lighthouse?.largestContentfulPaint || '',
      result.lighthouse?.timeToInteractive || '',
      result.lighthouse?.speedIndex || '',
      result.issues.join('; ')
    ]);
    
    return [headers, ...rows].map(row => row.join(',')).join('\n');
  }

  generateRecommendations(data) {
    const recommendations = [];
    
    if (data.summary.averageScores.performance < 80) {
      recommendations.push('🔧 Performance score is below 80. Consider optimizing images, reducing bundle size, and implementing caching.');
    }
    
    if (data.summary.averageScores.firstContentfulPaint > 2000) {
      recommendations.push('⚡ First Contentful Paint is slow. Optimize critical rendering path and reduce server response time.');
    }
    
    if (data.summary.averageScores.largestContentfulPaint > 4000) {
      recommendations.push('🖼️ Largest Contentful Paint is slow. Optimize images and preload critical resources.');
    }
    
    if (data.summary.failedTests > 0) {
      recommendations.push('🚨 Some tests failed. Review failed pages and address performance issues.');
    }
    
    return recommendations.map(rec => `<p>${rec}</p>`).join('');
  }
}

// CLI Interface
async function main() {
  const args = process.argv.slice(2);
  const command = args[0];
  
  if (command === 'test') {
    const performanceTest = new PerformanceTest();
    await performanceTest.runTests();
  } else if (command === 'install') {
    console.log('Installing dependencies...');
    execSync('npm install puppeteer lighthouse', { stdio: 'inherit' });
  } else {
    console.log('Usage:');
    console.log('  node performance-test.js install  # Install dependencies');
    console.log('  node performance-test.js test     # Run performance tests');
  }
}

if (require.main === module) {
  main().catch(console.error);
}

module.exports = { PerformanceTest, CONFIG };