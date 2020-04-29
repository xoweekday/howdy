const { Router } = require('express');
const twilio = require('twilio');
require('dotenv').config();

// twilio requirements -- texting api
const accoutSid = process.env.S_ID;
const authToken = process.env.AUTH_TOKEN;
const client = new twilio(accoutSid, authToken);

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
