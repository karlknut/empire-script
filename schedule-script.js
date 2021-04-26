// Schedule to run script in every 30 seconds

const schedule = require('node-schedule');
const empireMain = require('./empire-html');


const job = schedule.scheduleJob('*/30 * * * * *', () => { // runs every 30 seconds.
  empireMain();
});

