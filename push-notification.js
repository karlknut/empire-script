// Send WhatsApp messages

const wbm = require('wbm');

wbm.start({session: false}).then(async () => {
    const phones = ['+3725526641'];
    const message = 'Dice count is <= 3!';
    await wbm.send(phones, message);
    await wbm.end();
}).catch(err => console.log(err));