'use strict'; 

const io = require('socket.io')(3000);

io.on('connection', socket => {
  console.log(`Connected socket id: ${socket.id}`);
  socket.on('speak', payload => {
    socket.broadcast.emit('message', payload);
  });
});

// const io = require('socket.io-client');
// const socket = io.connect('http://localhost:3000');
// const faker = require('faker');

// let speakHakerPhrase = () => {
//   socket.emit('speak', faker.hacker.phrase());
// };

// setInterval(speakHakerPhrase, 1000);