const { Router } = require('express');
const db = require('../db');

const homeRouter = Router();

// POST /api/homepage
// when a user creates a party, add the details to the database
homeRouter.post('/', (req, res) => {
  db.addParty(req)
    .then(() => res.send(201))
    .catch(() => res.sendStatus(500));
});

// GET /api/homepage
// when the homepage renders, all available parties should show
homeRouter.get('/', (req, res) => {
  db.getRooms()
    .then((parties) => {
      res.send(parties);
    })
    .catch(() => res.sendStatus(500));
});

module.exports = {
  homeRouter,
};
