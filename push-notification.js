// Send WhatsApp messages

const diceCount = require('./empire-html');

const wbm = require('wbm');

wbm.start().then(async () => {
    const contacts = [
        { phone: '+3725526641', dice: diceCount },
        { phone: '+37256578761', dice: diceCount }
    ];
    const message = 'Dice count is {{diceCount}}';
    await wbm.send(contacts, message);
    await wbm.end();
}).catch(err => console.log(err));