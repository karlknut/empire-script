// Send WhatsApp messages

const empireMain = require('./empire-html');
const wbm = require('wbm');

const notification = () => {
    wbm.start().then(async () => {
        const diceCount = await empireMain();
        const contacts = [
            { phone: '+3725526641', dice: diceCount },
            { phone: '+37256578761', dice: diceCount }
        ];
        const message = 'Dice count is {{dice}}';
        await wbm.send(contacts, message);
        await wbm.end();
    }).catch(err => console.log(err));
};

module.exports = notification;

