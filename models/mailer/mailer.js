const mailer = require('nodemailer');
const config = require('config')

const transporter = mailer.createTransport({
    host: 'smtp.ukr.net',
    port: 465,
    service: 'ukr',
    secureConnection: true,
    secure: true,
    auth: {
      user: config.get('projMail'),
      pass: config.get('projMailPass'),
    }
  });

module.exports = transporter