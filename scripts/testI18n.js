import puppeteer from 'puppeteer';
import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = http.createServer((req, res) => {
  let filePath = path.join(__dirname, '..', req.url.split('?')[0]);
  if (req.url === '/' || req.url === '') {
    filePath = path.join(__dirname, '..', 'index.html');
  }

  const ext = path.extname(filePath);
  const contentTypes = {
    '.html': 'text/html',
    '.js': 'application/javascript',
    '.css': 'text/css',
    '.pdf': 'application/pdf',
    '.png': 'image/png'
  };

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.end('Not found');
    } else {
      res.writeHead(200, { 'Content-Type': contentTypes[ext] || 'text/plain' });
      res.end(data);
    }
  });
});

server.listen(5000, async () => {
  console.log('Test server started on http://localhost:5000');
  const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  
  const errors = [];
  page.on('pageerror', err => errors.push(err));

  // 1. Initial load (Default EN)
  await page.goto('http://localhost:5000', { waitUntil: ['load', 'networkidle0'] });
  let langAttr = await page.evaluate(() => document.documentElement.lang);
  let heroSummary = await page.evaluate(() => document.querySelector('#hero p.font-body')?.innerText);
  let navProfile = await page.evaluate(() => document.querySelector('.desktop-nav-links .nav-link')?.innerText);
  let activeLang = await page.evaluate(() => document.querySelector('.desktop-nav-links .lang-btn.active')?.innerText);

  console.log('--- DEFAULT EN LOAD ---');
  console.log('html lang:', langAttr);
  console.log('navProfile text:', navProfile);
  console.log('activeLang button:', activeLang);
  console.log('heroSummary:', heroSummary?.slice(0, 70));

  // 2. Switch to ES using desktop selector
  await page.evaluate(() => {
    const btn = document.querySelector('.desktop-nav-links .lang-btn[data-locale="es"]');
    btn.click();
  });
  langAttr = await page.evaluate(() => document.documentElement.lang);
  heroSummary = await page.evaluate(() => document.querySelector('#hero p.font-body')?.innerText);
  navProfile = await page.evaluate(() => document.querySelector('.desktop-nav-links .nav-link')?.innerText);
  activeLang = await page.evaluate(() => document.querySelector('.desktop-nav-links .lang-btn.active')?.innerText);
  let savedStorage = await page.evaluate(() => localStorage.getItem('site-language'));

  console.log('--- SWITCHED TO ES ---');
  console.log('html lang:', langAttr);
  console.log('navProfile text:', navProfile);
  console.log('activeLang button:', activeLang);
  console.log('localStorage value:', savedStorage);
  console.log('heroSummary:', heroSummary?.slice(0, 70));

  // 3. Reload page and check persistence
  await page.reload({ waitUntil: ['load', 'networkidle0'] });
  langAttr = await page.evaluate(() => document.documentElement.lang);
  heroSummary = await page.evaluate(() => document.querySelector('#hero p.font-body')?.innerText);
  console.log('--- RELOAD PERSISTENCE (ES) ---');
  console.log('html lang after reload:', langAttr);
  console.log('heroSummary after reload:', heroSummary?.slice(0, 70));

  // 4. Switch back to EN
  await page.evaluate(() => {
    const btn = document.querySelector('.desktop-nav-links .lang-btn[data-locale="en"]');
    btn.click();
  });
  langAttr = await page.evaluate(() => document.documentElement.lang);
  console.log('--- SWITCH BACK TO EN ---');
  console.log('html lang:', langAttr);

  // 5. Test Responsive Viewports in ES
  await page.evaluate(() => {
    const btn = document.querySelector('.desktop-nav-links .lang-btn[data-locale="es"]');
    btn.click();
  });

  const viewports = [
    { name: 'desktop_1440', width: 1440, height: 900 },
    { name: 'tablet_1024', width: 1024, height: 768 },
    { name: 'mobile_390', width: 390, height: 844 }
  ];

  for (const vp of viewports) {
    await page.setViewport({ width: vp.width, height: vp.height });
    const screenshotPath = path.join(__dirname, '..', 'assets', `i18n_${vp.name}_es.png`);
    await page.screenshot({ path: screenshotPath, fullPage: false });
    console.log(`📸 Captured: ${screenshotPath}`);
  }

  console.log('Total JS Errors:', errors.length);

  await browser.close();
  server.close();
});
