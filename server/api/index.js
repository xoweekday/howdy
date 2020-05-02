const { Router } = require('express');
const { homeRouter } = require('./homepage');
const { signupRouter } = require('./signup');
const { loginRouter } = require('./login');
const { logoutRouter } = require('./logout');
const { chatRouter } = require('./chatRoom');
const { twilioRoute } = require('./twilio');
const { rsvpRouter } = require('./rsvp');
const { banRouter } = require('./ban');

const apiRouter = Router();

apiRouter.use('/homepage', homeRouter);
apiRouter.use('/chatRoom', chatRouter);
apiRouter.use('/signup', signupRouter);
apiRouter.use('/login', loginRouter);
apiRouter.use('/logout', logoutRouter);
apiRouter.use('/twilio', twilioRoute);
apiRouter.use('/rsvp', rsvpRouter);
apiRouter.use('/ban', banRouter);

module.exports = {
  apiRouter,
};
