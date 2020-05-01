const { Router } = require('express');
const db = require('../db');

const loginRouter = Router();

// POST /api/login
// small
// when a user signs in through google, add the details to the database
loginRouter.post('/', (req, res) => {
  db.addUser(req)
    .then((result) => res.status(201).send(result))
    .catch((error) => {
      if (error.errno === 1062) {
        // this is if the user is returning and has already been entered into the database
        return null;
      }
      console.log(error);
      return res.sendStatus(500);
    });
});

// GET /api/login
loginRouter.get('/', (req, res) => {
  db.getUser(req)
    .then((user) => {
      res.send(user);
    })
    .catch(() => res.sendStatus(500));
});

module.exports = {
  loginRouter,
};
