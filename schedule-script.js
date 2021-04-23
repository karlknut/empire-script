// Schedule to run script in every 30 seconds

const { html } = require('cheerio');
const schedule = require('node-schedule');
const empire_main = require('./empire-html');

async function scheduler() {
const page = await configureBrowser();

const job = schedule.scheduleJob('*/30 * * * * *', function(){ // runs every 30 seconds.
    lessThree(diceCount);
  }, null, true, null, null, true);
  job.start();
};

scheduler(empire_main);