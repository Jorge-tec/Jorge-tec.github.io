import puppeteer from 'puppeteer';

async function validateProductionI18n() {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  const errors = [];

  page.on('console', msg => console.log('PROD LOG:', msg.text()));
  page.on('pageerror', err => {
    console.error('PROD PAGE ERROR:', err);
    errors.push(err);
  });

  console.log('Navigating to https://jorge-tec.github.io/ ...');
  const response = await page.goto('https://jorge-tec.github.io/', {
    waitUntil: ['load', 'networkidle0']
  });

  console.log('HTTP Status Code:', response.status());

  // 1. Initial State (Default EN)
  let langAttr = await page.evaluate(() => document.documentElement.lang);
  let navProfile = await page.evaluate(() => document.querySelector('.desktop-nav-links .nav-link')?.innerText);
  let heroSummary = await page.evaluate(() => document.querySelector('#hero p.font-body')?.innerText);
  let activeLang = await page.evaluate(() => document.querySelector('.desktop-nav-links .lang-btn.active')?.innerText);

  console.log('=== PRODUCTION TEST 1: DEFAULT EN ===');
  console.log('html lang:', langAttr);
  console.log('navProfile text:', navProfile);
  console.log('active button:', activeLang);
  console.log('heroSummary preview:', heroSummary?.slice(0, 60));

  // 2. Switch to ES
  await page.evaluate(() => {
    const btn = document.querySelector('.desktop-nav-links .lang-btn[data-locale="es"]');
    if (btn) btn.click();
  });

  langAttr = await page.evaluate(() => document.documentElement.lang);
  navProfile = await page.evaluate(() => document.querySelector('.desktop-nav-links .nav-link')?.innerText);
  heroSummary = await page.evaluate(() => document.querySelector('#hero p.font-body')?.innerText);
  activeLang = await page.evaluate(() => document.querySelector('.desktop-nav-links .lang-btn.active')?.innerText);
  let storageVal = await page.evaluate(() => localStorage.getItem('site-language'));

  console.log('=== PRODUCTION TEST 2: SWITCH TO ES ===');
  console.log('html lang:', langAttr);
  console.log('navProfile text:', navProfile);
  console.log('active button:', activeLang);
  console.log('localStorage site-language:', storageVal);
  console.log('heroSummary preview:', heroSummary?.slice(0, 60));

  // 3. Reload page to verify persistence in production
  await page.reload({ waitUntil: ['load', 'networkidle0'] });
  langAttr = await page.evaluate(() => document.documentElement.lang);
  heroSummary = await page.evaluate(() => document.querySelector('#hero p.font-body')?.innerText);

  console.log('=== PRODUCTION TEST 3: RELOAD PERSISTENCE (ES) ===');
  console.log('html lang after reload:', langAttr);
  console.log('heroSummary after reload:', heroSummary?.slice(0, 60));

  // 4. Switch back to EN
  await page.evaluate(() => {
    const btn = document.querySelector('.desktop-nav-links .lang-btn[data-locale="en"]');
    if (btn) btn.click();
  });
  langAttr = await page.evaluate(() => document.documentElement.lang);
  console.log('=== PRODUCTION TEST 4: SWITCH BACK TO EN ===');
  console.log('html lang:', langAttr);

  await page.screenshot({ path: 'assets/production_i18n_validated.png', fullPage: false });
  console.log('📸 Production screenshot saved: assets/production_i18n_validated.png');
  console.log('Total live JavaScript errors:', errors.length);

  await browser.close();
}

validateProductionI18n();
