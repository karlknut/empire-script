/*
[] Open browser
[] Go to given url
[] Check for correct 'Roulette' link
[] Click link
[] Check for todays date, compare it
[] Click numbers under 'Rolls' if 'Date' matches
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
    page.click('capitalize', clickOptions),
  ]);
  if(Date === Date.now){
    const [response] = await Promise.all([
      page.waitForNavigation(waitOptions),
      page.click('link-gold', clickOptions),
    ]);
  };
};

async function checkDice() {
  // if XPath '//*[@id="page-scroll"]/div[1]/div/div/div[15]/span' text does not contain ' - 0' for last 60
}

async function monitor() {
  let page = await configureBrowser();
  await checkDice(page);
};

monitor();