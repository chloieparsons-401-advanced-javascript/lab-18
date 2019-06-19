'use strict'; 

// Server
// Create a socket.io server in a new folder called server
// Setup listeners for file-save and file-error events
// When they occur, emit() the appropriate event and payload to clients (specficially, the ‘logger’ will pick this up)

const io = require('socket.io')(3000);

io.on('connection', socket => {
  console.log(`Connected socket id: ${socket.id}`);

  socket.on('file-save', payload => {
    socket.broadcast.emit('You are Successful!', payload);
  });

  socket.on('file-error', payload => {
    socket.broadcast.emit('Uhoh! Error.', payload);
  });

  socket.on('disconnection', () => {
    console.log(`Disconnected socket id: ${socket.id}`);
  });


});

// const io = require('socket.io-client');
// const socket = io.connect('http://localhost:3000');
// const faker = require('faker');

// let speakHakerPhrase = () => {
//   socket.emit('speak', faker.hacker.phrase());
// };

// setInterval(speakHakerPhrase, 1000);