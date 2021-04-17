const puppeteer = require('puppeteer');
const $ = require('cheerio');
const schedule = require('node-schedule');

/*
[x] Open browser
[x] Go to given url
[x] Wait for page html
[x] Find Current Dice Count through XPath
[x] Function to check if Current Dice Count <= 3
[] If function returns true, send iPhone push-notification
*/

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto('https://csgoempire.com/');

  await page.waitForXPath("//*[@id='page-scroll']/div[1]/div/div/div[3]/div/div[2]/div[5]");
  
  let elHandle = await page.$x("//*[@id='page-scroll']/div[1]/div/div/div[3]/div/div[2]/div[5]");

  let diceCount = await page.evaluate(el => el.textContent, elHandle[0]);

  const lessThree = (diceCount) => {
    if (diceCount <= 3) {
      console.log('Current Dice Count is: ', diceCount);
    } else {
      console.log('Current Dice Count is over 3.');
    };
  };

  lessThree(diceCount);

  await browser.close();
})();
