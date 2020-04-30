const { Router } = require('express');
require('dotenv').config();

// twilio requirements -- texting api
const accoutSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accoutSid 'sid', authToken 'token');

const twilioRoute = Router();

twilioRoute.post('/', (req, res) => {
  const { recipient, textmessage } = req.body;
  console.log(recipient, textmessage);
  client.messages.create({
    body: textmessage,
    to: `+1${recipient}`,
    from: process.env.PHONE_NUMBER,
  })
    .then((message) => res.status(200).send(message.body))
    .catch((err) => console.error(err));
});

module.exports = {
  twilioRoute,
};
