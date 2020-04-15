const { Router } = require('express');
const { partyRouter } = require('./parties');

const apiRouter = Router();

apiRouter.use('/parties', partyRouter);

module.exports = {
  apiRouter,
}