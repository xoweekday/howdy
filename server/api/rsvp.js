const { Router } = require('express');
const db = require('../db');

const rsvpRouter = Router();

rsvpRouter.post('/', (req, res) => {
  db.addRsvp(req)
    .then((result) => res.status(200).send(result))
    .catch((err) => {
      console.log(err, 'unable to store data into database');
      res.status(501);
    });
});

module.exports = {
  rsvpRouter,
};
