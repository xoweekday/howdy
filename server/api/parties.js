const { Router } = require('express');
const db = require('../db');

const partyRouter = Router();

// POST /api/parties
// when a user creates a party, add the details to the database

// GET /api/parties
// when the homepage renders, all available parties should show
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