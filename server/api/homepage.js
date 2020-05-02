const { Router } = require('express');
const db = require('../db');

const homeRouter = Router();

// POST /api/homepage
// when a user creates a party, add the details to the database
homeRouter.post('/', (req, res) => {
  db.addParty(req)
    .then((packet) => res.status(201).send(packet))
    .catch((error) => {
      console.log(error);
      res.sendStatus(500);
    });
});

// GET /api/homepage
// when the homepage renders, all available parties should show
homeRouter.get('/', (req, res) => {
  db.getRooms()
    .then((parties) => {
      res.send(parties);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500)});
});

module.exports = {
  homeRouter,
};
