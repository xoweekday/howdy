const { Router } = require('express');
const db = require('../db');

const banRouter = Router();

banRouter.post('/', (req, res) => {
  db.addBan(req)
    .then(() => {
      res.status(201).send();
    })
    .catch(() => res.status(500).send());
});

banRouter.get('/:userId/:roomId', (req, res) => {
  db.getBan(req)
    .then((result) => {
      if(result.length) {
        res.status(200).send(true);
      } else {
        res.status(200).send(false);
      }
    })
    .catch(() => res.status(500).send());
});

module.exports = {
  banRouter,
};