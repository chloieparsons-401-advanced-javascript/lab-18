'use strict';

const io = require('socket.io-client');
const socket = io.connect('http://localhost:3000');

socket.on('file-save', fileSave);
socket.on('file-error', fileError);

function fileSave(payload) {
  console.log('file-saved', payload);
}

function fileError(payload) {
  console.error('file-error', payload);
}

module.exports = {fileSave, fileError};