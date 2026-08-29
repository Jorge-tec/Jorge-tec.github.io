import puppeteer from 'puppeteer';

async function validateProduction() {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  const errors = [];

  page.on('console', msg => console.log('PROD CONSOLE:', msg.text()));
  page.on('pageerror', err => {
    console.error('PROD PAGE ERROR:', err);
    errors.push(err);
  });

  const response = await page.goto('https://jorge-tec.github.io/', {
    waitUntil: ['load', 'networkidle0']
  });

  console.log('HTTP Status Code:', response.status());

  const appHtml = await page.evaluate(() => document.getElementById('app')?.innerHTML);
  const heroTitle = await page.evaluate(() => document.querySelector('h1')?.innerText);
  const heroPositioning = await page.evaluate(() => document.querySelector('h2')?.innerText);
  const skillsCount = await page.evaluate(() => document.querySelectorAll('#skills .tech-chip').length);
  const expSections = await page.evaluate(() => document.querySelectorAll('#experience [class*="card"]').length);
  const downloadLink = await page.evaluate(() => document.querySelector('a[download]')?.getAttribute('href'));

  console.log('=== PRODUCTION VALIDATION METRICS ===');
  console.log('App root populated:', appHtml && appHtml.length > 500);
  console.log('Hero Name:', heroTitle);
  console.log('Hero Positioning:', heroPositioning);
  console.log('Skills rendered count:', skillsCount);
  console.log('Experience blocks count:', expSections);
  console.log('Download CV link href:', downloadLink);
  console.log('Total JS Errors on live site:', errors.length);

  await page.screenshot({ path: 'assets/production_live_validation.png', fullPage: false });
  console.log('📸 Saved production screenshot: assets/production_live_validation.png');

  await browser.close();
}

validateProduction();
