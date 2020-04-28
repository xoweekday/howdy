const { Router } = require('express');
const twilio = require('twilio');
require('dotenv').config();

// twilio requirements -- texting api
const accoutSid = process.env.S_ID;
const authToken = process.env.AUTH_TOKEN;
const client = (accoutSid, authToken);

const twilioRoute = Router();

twilioRoute.get('/send-text', (req, res) => {
  const { recipient, textmessage } = req.query;
  client.messages.create({
    body: textmessage,
    to: recipient,
    from: process.env.PHONE_NUMBER,
  }).then((message) => console.log(message.body));
});

module.exports = {
  twilioRoute,
};
