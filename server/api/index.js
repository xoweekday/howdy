const { Router } = require('express');
const { homeRouter } = require('./homepage');
const { signupRouter } = require('./signup');

const apiRouter = Router();

apiRouter.use('/homepage', homeRouter);
apiRouter.use('/signup', signupRouter);

module.exports = {
  apiRouter,
}