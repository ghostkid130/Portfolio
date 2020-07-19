const nodemailer = require('nodemailer');
require('dotenv').config()


if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config( );
  }


console.log(process.env.EMAIL_USERNAME)
console.log(process.env.PASSWORD)


const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD
    }
});

var mailOptions = {
  from: 'urena.reynold@gmail.com',
  to: 'urena.reynold@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});