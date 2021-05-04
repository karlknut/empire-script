const puppeteer = require('puppeteer');
const $ = require('cheerio');

/*
[x] Open browser
[x] Go to given url
[x] Wait for page html
[x] Find Current Dice Count through XPath
[x] Function to check if Current Dice Count <= 3
[] If function returns true, send iPhone push-notification
[x] Schedule script to run every 30 seconds
*/

const empireMain = async () => {
  return new Promise(async (resolve) => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto('https://csgoempire.com/');

    await page.waitForXPath("//*[@id='page-scroll']/div[1]/div/div/div[3]/div/div[2]/div[5]");
    
    let elHandle = await page.$x("//*[@id='page-scroll']/div[1]/div/div/div[3]/div/div[2]/div[5]");

    let diceCount = await page.evaluate(el => el.textContent, elHandle[0]);

    await browser.close();

    console.log(diceCount);

    return resolve(diceCount);
  });
};

module.exports = empireMain;