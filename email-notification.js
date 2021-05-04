const nodeMailer = require("nodemailer");

const sendMail = () => {
    const transporter = nodeMailer.createTransport({
        host: "localhost",
        port: 25,
        secure: false,
        tls: {
            rejectUnauthorized: false,
        },
    });
    
    let mailOptions = {
        from: 'karlknut4@gmail.com',
        to: 'karl-knut.kanemagi@tptlive.ee',
        subject: "Ruttu gamblima, raha ootab",
        text: 'Dice count on väiksem kui 3!'
    };
    
    transporter.sendMail(mailOptions, (err, information) => {
        if (err) {
            console.log(err);
        };
    });
};

module.exports = sendMail;