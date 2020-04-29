const express = require('express');
const path = require('path');
const http = require('http');
const socket = require('socket.io');
const cron = require('node-cron');
const cors = require('cors');
const { addUser, removeUser, getUser, getUsersInRoom, getRandomCharacter } = require('./users.js');
const { checkAnswer } = require('./game.js');

require('dotenv').config();
const { apiRouter } = require('./api');

const app = express();
const server = http.createServer(app);
const io = socket(server);

cron.schedule("* * * * *", function() {
  console.log("running a task every minute");
});

io.on('connection', (socket) => {
  socket.on('join', ({ room, username, userId }, callback) => {
    const user = addUser({ id: socket.id, name: username, room, userId });
    
    // Welcome message to the new user
    socket.emit('receiveMessage', { user: 'Admin', text: `Welcome to ${user.room}, ${user.name}!` });
    // New user joined party alert to specific room
    socket.broadcast.to(user.room).emit('receiveMessage', { user: 'Admin', text: `${user.name} has joined ${user.room}!` });

    socket.join(user.room);

    io.to(room).emit('usersInRoom', getUsersInRoom(room));

    callback(); // doesn't do anything, was going to use to handle errors...
  });

  socket.on('sendMessage', ({ message }, callback) => {
    const user = getUser(socket.id);

    if (message.includes('https://res.cloudinary.com/')) {
      io.to(user.room).emit('receiveImage', { user: user.name, img: message, time: new Date() });
    } else {
      io.to(user.room).emit('receiveMessage', { user: user.name, text: message, time: new Date() });

      if (checkAnswer(message, user.character)) {
        socket.emit('receiveMessage', { user: 'Admin', text: `You guessed it ${user.name}, your character was ${user.character}! Now guess your next character.` });
        socket.broadcast.to(user.room).emit('receiveMessage', { user: 'Admin', text: `${user.name} has guessed their character ${user.character}!` });
        user.character = getRandomCharacter();
        io.to(user.room).emit('usersInRoom', getUsersInRoom(user.room));
      }
    }

    callback(); // clears text input field
  });

  socket.on('deleteMessage', (message) => {
    const user = getUser(socket.id);

    io.to(user.room).emit('receiveDelete', message);
  });

  socket.on('leaveParty', () => {
    const { room, name } = getUser(socket.id);
    io.to(room).emit('receiveMessage', { user: 'Admin', text: `${name} has left.` });
    io.sockets.connected[socket.id].disconnect();
  });

  socket.on('getKicked', () => {
    const { room, name } = getUser(socket.id);
    io.to(room).emit('receiveMessage', { user: 'Admin', text: `${name} has been kicked.` });
    io.sockets.connected[socket.id].disconnect();
  });

  socket.on('disconnect', () => {
    if (getUser(socket.id)) {
      const { room } = removeUser(socket.id);

      socket.leave(room);

      io.to(room).emit('usersInRoom', getUsersInRoom(room));
    }
  });

  socket.on('kickUser', (id) => {
    io.to(id).emit('receiveMessage', { user: 'Admin', text: 'You have been kicked.'});
    setTimeout(() => io.to(id).emit('receiveKick', {user: 'Admin'}), 500);
  });

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
