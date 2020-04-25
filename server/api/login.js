const { Router } = require('express');
const db = require('../db');

const loginRouter = Router();

// POST /api/login
// when a user signs in through google, add the details to the database
loginRouter.post('/', (req, res) => {
  db.addUser(req)
    .then(() => res.send(201))
    .catch((error) => {
      if (error.errno === 1062) {
        return null;
      }
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
