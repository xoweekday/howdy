const { Router } = require('express');
const db = require('../db');

const homeRouter = Router();

// POST /api/homepage
// when a user creates a party, add the details to the database

// GET /api/homepage
// when the homepage renders, all available parties should show
homeRouter.get('/', (req, res) => {
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
  homeRouter,
};