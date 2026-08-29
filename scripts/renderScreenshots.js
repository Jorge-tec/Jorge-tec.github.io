import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { renderCvHtml } from './cvTemplate.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function captureImages() {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setContent(renderCvHtml(), { waitUntil: ['load', 'networkidle0'] });
  await page.evaluateHandle('document.fonts.ready');
  await page.setViewport({ width: 1200, height: 1600, deviceScaleFactor: 2 });

  const pageHandles = await page.$$('.page');
  console.log(`Found ${pageHandles.length} page containers.`);

  for (let i = 0; i < pageHandles.length; i++) {
    const outPath = path.join(__dirname, '..', 'assets', `cv_page_${i + 1}.png`);
    await pageHandles[i].screenshot({ path: outPath });
    console.log(`Saved screenshot: ${outPath}`);
  }

  await browser.close();
}

captureImages();
