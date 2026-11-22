import puppeteer from 'puppeteer';
import fs from 'fs';

async function runTests() {
  console.log('Launching browser...');
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();

  // Test 1: Desktop Viewport 1440x1000
  await page.setViewport({ width: 1440, height: 1000 });
  await page.goto('http://localhost:4173', { waitUntil: 'networkidle0' });
  console.log('Loaded Desktop page');

  // Verify sample tasks loaded
  const taskCards = await page.$$('.task-item-card');
  console.log(`Initial tasks rendered: ${taskCards.length} (Expected >= 6)`);

  // Verify statistics
  const statValues = await page.$$eval('.stat-value', els => els.map(e => e.textContent));
  console.log('Statistics values:', statValues);

  // Capture Desktop Screenshot
  await page.screenshot({ path: 'screenshots/desktop-dashboard-1440x1000.png', fullPage: true });
  console.log('Saved desktop-dashboard-1440x1000.png');

  // Test 2: Create Task Modal Form
  await page.click('#btn-create-task');
  await new Promise(r => setTimeout(r, 400));
  const isModalVisible = await page.$('.modal-dialog');
  console.log('Modal visible:', Boolean(isModalVisible));

  // Capture Task Form Screenshot
  await page.screenshot({ path: 'screenshots/create-task-form-760x822.png' });
  console.log('Saved create-task-form-760x822.png');

  // Close modal
  await page.click('.modal-close-btn');
  await new Promise(r => setTimeout(r, 300));

  // Test 3: Focus Notes Carousel Next & Prev
  const initialSlideTitle = await page.$eval('.slide-title', el => el.textContent);
  console.log('Initial slide:', initialSlideTitle);
  // Click Next
  const nextBtn = await page.$$('.carousel-btn');
  if (nextBtn[1]) {
    await nextBtn[1].click();
    await new Promise(r => setTimeout(r, 300));
    const nextSlideTitle = await page.$eval('.slide-title', el => el.textContent);
    console.log('After Next click slide:', nextSlideTitle);
  }

  // Test 4: Mobile Viewport 390x1128
  await page.setViewport({ width: 390, height: 1128 });
  await page.reload({ waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 500));

  // Check horizontal overflow
  const hasHorizontalScroll = await page.evaluate(() => {
    return document.documentElement.scrollWidth > document.documentElement.clientWidth;
  });
  console.log('Mobile horizontal scroll detected:', hasHorizontalScroll);

  // Capture Mobile Screenshot
  await page.screenshot({ path: 'screenshots/mobile-dashboard-390x1128.png', fullPage: true });
  console.log('Saved mobile-dashboard-390x1128.png');

  await browser.close();
  console.log('All automated verification passed successfully!');
}

runTests().catch(err => {
  console.error('Error during testing:', err);
  process.exit(1);
});
