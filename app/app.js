'use strict';

const fs = require('fs');
const util = require('util');

const io = require('socket.io-client');
const socket = io.connect('http://localhost:3000');
require('../logger/logger');

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

let read = (file) => {return readFile(file);};
let write = (file, buffer) => {return writeFile(file, buffer);};
let upperCase = (buffer) => {Buffer.from(buffer.toString().trim().toUpperCase());};

let alterFile = (file) => {
  read(file) 
    .then(buffer => {
      buffer = upperCase(buffer);
      write(file, buffer)
        .then(socket.emit('file-save', 'File successfully written!'));
    })
    .catch(error => socket.emit('file-error', 'Uh oh! Error.', error));
};

let file = process.argv.slice(2).shift();
alterFile(file);
