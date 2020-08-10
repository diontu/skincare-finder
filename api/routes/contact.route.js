const router = require('express').Router();
const nodemailer = require('nodemailer');

require('dotenv').config({path: '../../.env'});

router.route('/send').post(async (req, res) => {
    //req.body() contains the variables that were sent
    const contactInfo = req.body;

    return new Promise((resolve, reject) => {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });
    
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER_MAIN,
            subject: 'RE: SKINCARE-FINDER: ' + contactInfo.name + ';' + contactInfo.email,
            text: contactInfo.message
        };
    
        transporter.sendMail(mailOptions, function(err, info) {
            if (err) {
                console.log(err);
                resolve(err);
            } else {
                console.log('Email sent: ' + info.response);
                resolve(true); //-----------------------------change the returned result here
            }
            transporter.close();
        });


    });
    
});

module.exports = router;