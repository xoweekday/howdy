const { Router } = require('express');
const db = require('../db');

const partyRouter = Router();

// GET /api/parties
partyRouter.get('/', (req, res) => {
  db.getRooms()
    .then((parties) => {
      res.send(parties);
    })
    .catch((error) => {
      console.log(error);
      res.sendStatus(500);
    });
});

module.exports = {
  partyRouter,
};