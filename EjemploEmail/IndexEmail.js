var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'hotmail',
  auth: {
    user: 'sk_dante@hotmail.com',
    pass: 'SkyAngel7*'
  }
});

var mailOptions = {
  from: 'sk_dante@hotmail.com',
  to: 'samuel.rodriguez1292085@gmail.com, gskdante@gmail.com',
  subject: 'Sending Email using Node.js',
  //text: 'That was easy!'
  html: '<h1>Welcome</h1><p>That was easy!</p>'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});