// Schedule to run script in every 30 seconds

const schedule = require('node-schedule');
const empireMain = require('./empire-html');
const notification = require('./push-notification');
const sendMail = require('./email-notification');


const job = schedule.scheduleJob('*/30 * * * * *', async () => { // runs every 30 seconds.
  console.log('checking dice');
  const diceCount = await empireMain();
  console.log(diceCount);
  if (diceCount <= 3) {
    console.log('sending message');
    notification();
    sendMail();
  };
});

