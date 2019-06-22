'use strict'; 
const PORT = process.env.PORT || 3000;

const io = require('socket.io')(PORT);

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