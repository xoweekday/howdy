const express = require('express');
const path = require('path');
const { apiRouter } = require('./api');

const app = express();

const PORT = 8080;
const CLIENT_PATH = path.join(__dirname, '../client/dist');

app.use(express.json());
app.use('/api', apiRouter);
app.use(express.static(CLIENT_PATH));

app.listen(PORT, () => {
  console.log(`Listening on :${PORT} 🚀`);
});

module.exports = {
  app,
};