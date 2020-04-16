const { Router } = require('express');
const db = require('../db');

const chatRouter = Router();

chatRouter.get('/', (req, res) => {
  db.getMessages()
    .then((messages) => {
      res.send(messages);
    })
    .catch((error) => {
      console.log(error);
      res.sendStatus(500);
    });
});

module.exports = {
  chatRouter,
};