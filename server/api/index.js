const { Router } = require('express');
const { homeRouter } = require('./homepage');
const { signupRouter } = require('./signup');
const { loginRouter } = require('./login');

const apiRouter = Router();

apiRouter.use('/homepage', homeRouter);
apiRouter.use('/signup', signupRouter);
apiRouter.use('/login', loginRouter);

module.exports = {
  apiRouter,
}