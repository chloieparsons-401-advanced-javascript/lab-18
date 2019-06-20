'use strict';

const io = require('socket.io-client');
const socket = io.connect('http://localhost:3000');

socket.on('file-save', payload => {
  console.log('You saved it, good job!', payload);
});

socket.on('file-error', payload => {
  console.log('Uhoh! Error.', payload);
});