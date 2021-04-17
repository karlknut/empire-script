// Schedule to run script in every 30 seconds

const schedule = require('node-schedule');

async function scheduler() {
const page = await configureBrowser();

const job = schedule.scheduleJob('*/30 * * * * *', function(){ // runs every 30 seconds.
    checkDice(page);
  }, null, true, null, null, true);
  job.start();
};

scheduler();