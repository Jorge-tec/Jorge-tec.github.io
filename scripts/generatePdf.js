import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { renderCvHtml } from './cvTemplate.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function generatePdf() {
  console.log('🚀 Starting PDF generation with Puppeteer...');
  
  const assetsDir = path.join(__dirname, '..', 'assets');
  if (!fs.existsSync(assetsDir)) {
    fs.mkdirSync(assetsDir, { recursive: true });
  }

  const outputPath = path.join(assetsDir, 'Jorge-Gutierrez-CV.pdf');
  const cvHtml = renderCvHtml();

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  try {
    const page = await browser.newPage();
    
    // Set content and wait for network & fonts
    await page.setContent(cvHtml, {
      waitUntil: ['load', 'networkidle0']
    });

    // Ensure web fonts are completely loaded
    await page.evaluateHandle('document.fonts.ready');

    await page.pdf({
      path: outputPath,
      format: 'Letter',
      printBackground: true,
      preferCSSPageSize: true,
      margin: {
        top: '0',
        bottom: '0',
        left: '0',
        right: '0'
      }
    });

    console.log(`✅ CV PDF generated successfully: ${outputPath}`);
    const stats = fs.statSync(outputPath);
    console.log(`📄 File size: ${stats.size} bytes`);
  } catch (error) {
    console.error('❌ Error during PDF generation:', error);
    process.exit(1);
  } finally {
    await browser.close();
  }
}

generatePdf();
