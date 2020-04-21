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

  socket.on('join', ({ room, username }, callback) => {
    socket.username = username;
    socket.room = room;

    // Welcome message to the new user
    socket.emit('receiveMessage', {user: 'Admin', text: `Welcome to the ${room}, ${socket.username}!`});
    // New user joined party alert to specific room
    socket.broadcast.to(socket.room).emit('receiveMessage', {user: 'Admin', text: `${username} has joined ${room}!`});

    socket.join(socket.room);

    callback();
  })

  socket.on('sendMessage', (data, callback) => {
    const message = { user: socket.username, text: data.message };

    io.to(socket.room).emit('receiveMessage', message);

    // clears text input field
    callback();
  })

  socket.on('leaveParty', (room) => {
    socket.leave(room)

    io.to(room).emit('receiveMessage', {user: 'Admin', text: `${socket.username} has left.`});
  })

  socket.on('disconnect', () => {
    io.to(socket.room).emit('receiveMessage', {user: 'Admin', text: `${socket.username} has left.`});
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