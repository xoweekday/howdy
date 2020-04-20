const express = require('express');
const path = require('path');
const http = require('http');
const socket = require('socket.io');
const cors = require('cors');

require('dotenv').config();
const { apiRouter } = require('./api');

const app = express();
const server = http.createServer(app);
const io = socket(server);

io.on('connection',socket => {

  socket.on('join', ({ room }, callback) => {
    let user = socket.id.slice(0, 7);
    // Welcome message to the new user
    socket.emit('receiveMessage', `Welcome to the ${room}, ${user}`);
    // New user joined party
    socket.broadcast.emit('receiveMessage', `${user} has joined your party`);

    // socket.broadcast.to(user.room).emit('message', { user: 'admin', text: `${user.name}, has joined!`});
    callback();
  })

  socket.on('sendMessage', (data, callback) => {
    io.emit('receiveMessage', data);

    // clears text input field
    callback();
  })

  socket.on('disconnect', () => {
    io.emit('receiveMessage', 'Someone has left.');
  })
});

const PORT = process.env.RDS_PORT || 8080;
const CLIENT_PATH = path.join(__dirname, '../client/dist');

app.use(express.json());
app.use('/api', apiRouter);
app.use(express.static(CLIENT_PATH));
app.use(cors());

server.listen(PORT, () => {
  console.log(`Listening on :${PORT} 🚀`);
});

module.exports = {
  app,
};