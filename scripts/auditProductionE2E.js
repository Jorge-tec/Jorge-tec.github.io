import puppeteer from 'puppeteer';

async function runEndToEndAudit() {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  const logs = [];
  const errors = [];

  page.on('console', msg => logs.push(msg.text()));
  page.on('pageerror', err => errors.push(err.toString()));

  const res = await page.goto('https://jorge-tec.github.io/', {
    waitUntil: ['load', 'networkidle0']
  });
  console.log('Production URL Response Code:', res.status());

  // 1. Check all section elements exist in DOM
  const sectionIds = ['hero', 'snapshot', 'profile', 'journey', 'skills', 'experience', 'learning', 'recognitions', 'education', 'contact'];
  const missingSections = [];
  for (const id of sectionIds) {
    const el = await page.$('#' + id);
    if (!el) missingSections.push(id);
  }
  console.log('Missing sections:', missingSections.length ? missingSections : 'None (All 10 present)');

  // 2. Check internal anchor targets
  const navHrefs = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('a[href^="#"]')).map(a => a.getAttribute('href'));
  });
  console.log('Anchor targets found:', Array.from(new Set(navHrefs)));

  // 3. Test Viewports and Check for Horizontal Overflow
  const testVps = [
    { w: 390, h: 844 },
    { w: 768, h: 1024 },
    { w: 1024, h: 768 },
    { w: 1440, h: 900 }
  ];

  for (const vp of testVps) {
    await page.setViewport({ width: vp.w, height: vp.h });
    const hasHScroll = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth);
    console.log(`Viewport ${vp.w}x${vp.h} horizontal overflow:`, hasHScroll ? 'FAIL (Overflow detected)' : 'PASS (No overflow)');
  }

  // 4. Test Language Switcher in Production
  await page.evaluate(() => {
    const esBtn = document.querySelector('.lang-btn[data-locale="es"]');
    if (esBtn) esBtn.click();
  });
  const htmlLangES = await page.evaluate(() => document.documentElement.lang);
  const heroSummaryES = await page.evaluate(() => document.querySelector('#hero p.font-body')?.innerText);
  console.log('ES Switch html lang:', htmlLangES);
  console.log('ES Hero text preview:', heroSummaryES?.slice(0, 40));

  await page.evaluate(() => {
    const enBtn = document.querySelector('.lang-btn[data-locale="en"]');
    if (enBtn) enBtn.click();
  });
  const htmlLangEN = await page.evaluate(() => document.documentElement.lang);
  console.log('EN Switch html lang:', htmlLangEN);

  console.log('Live Console Errors count:', errors.length);
  if (errors.length) console.log('Errors:', errors);

  await browser.close();
}

runEndToEndAudit();
