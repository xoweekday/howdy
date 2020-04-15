const { Router } = require('express');
const { homeRouter } = require('./homepage');

const apiRouter = Router();

apiRouter.use('/homepage', homeRouter);

module.exports = {
  apiRouter,
}