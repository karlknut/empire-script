/*
[x] Open browser
[x] Go to given url
[x] Check for correct 'Roulette' link
[x] Click link
[x] Check for todays date, compare it
[x] Click numbers under 'Rolls' if 'Date' matches
[] Check for last 60 rolls, if there has been ' - 0' in html
[] If false, send iPhone push-notification
*/







const puppeteer = require('puppeteer');
const $ = require('cheerio');
const url = 'https://csgoempire.com/fairness';

async function configureBrowser() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);
  return page;
};

async function history() {
  const [response] = await Promise.all([
    page.waitForNavigation(waitOptions),
    page.click("//*[@id='page-scroll']/div[1]/div/div/div[1]/div[2]/button/span", clickOptions),
  ]);
    const [response] = await Promise.all([
      page.waitForNavigation(waitOptions),
      page.click("//*[@id='page-scroll']/div[1]/div/div/div[2]/div/div[2]/div[1]/div/table/tbody/tr[1]/td[4]/a", clickOptions),
    ]);
};

async function checkDice() {
  // if XPath '//*[@id="page-scroll"]/div[1]/div/div/div[15]/span' text does not contain ' - 0' for last 60
  if ("//*[@id='page-scroll']/div[1]/div/div/div[5]/span" === ' - 0'){
    console.log("there's dice.")
  }
}

async function monitor() {
  let page = await configureBrowser();
  await checkDice(page);
};

monitor();