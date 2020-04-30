const { Router } = require('express');
const db = require('../db');

const homeRouter = Router();

// POST /api/homepage
// when a user creates a party, add the details to the database
homeRouter.post('/', (req, res) => {
  db.addParty(req)
<<<<<<< HEAD
    .then(() => res.send(201))
    .catch((err) => {
      console.log(err);
      res.sendStatus(500).send(err);
=======
    .then(() => res.sendStatus(201))
    .catch((error) => {
      console.log(error);
      res.sendStatus(500);
>>>>>>> 04b574d657ea51a0d4273757a26ec7c56d3b52a8
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
