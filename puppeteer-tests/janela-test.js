const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  // Acessa o site inicial
  await page.goto('https://demoqa.com/');

  // Clica no card "Alerts, Frame & Windows"
  await page.waitForSelector('.card-body');
  const cards = await page.$$('.card-body');
  await cards[2].click();

  // Clica no menu lateral "Browser Windows"
  await page.waitForSelector('li.btn.btn-light');
  const buttons = await page.$$('li.btn.btn-light');
  await buttons[10].click();

  // Escuta a nova aba aberta
  const [newPage] = await Promise.all([
    browser.waitForTarget(target => target.url() === 'https://demoqa.com/sample')
      .then(target => target.page()),
    page.click('#windowButton'),
  ]);

  // Valida o conteúdo da nova aba
  await newPage.waitForSelector('#sampleHeading');
  const text = await newPage.$eval('#sampleHeading', el => el.textContent);
  console.log('Texto da nova janela:', text);

  // Fecha a aba nova
  await newPage.close();

  // Fecha o navegador
  await browser.close();
})();
