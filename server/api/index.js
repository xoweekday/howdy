const { Router } = require('express');
const { homeRouter } = require('./homepage');
const { signupRouter } = require('./signup');
const { loginRouter } = require('./login');
const { logoutRouter } = require('./logout');
const { chatRouter } = require('./chatRoom');

const apiRouter = Router();

apiRouter.use('/homepage', homeRouter);
apiRouter.use('/chatRoom', chatRouter);
apiRouter.use('/signup', signupRouter);
apiRouter.use('/login', loginRouter);
apiRouter.use('/logout', logoutRouter);

module.exports = {
  apiRouter,
}