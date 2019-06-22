'use strict';

const fs = require('fs');
const promisify = require('util');

const io = require('socket.io-client');
const socket = io.connect('http://localhost:3000');
require('../logger/logger');

const readFile = typeof fs.readFile === 'function' ? promisify(fs.readFile) : async function () {
  throw new Error('Invalid operation.');};

const writeFile = typeof fs.writeFile === 'function' ? promisify(fs.writeFile) : async function () {
  throw new Error('Invalid operation.');};

let read = (file) => {return readFile(file);};
let write = (file, buffer) => {return writeFile(file, buffer);};
let upperCase = (buffer) => {Buffer.from(buffer.toString().trim().toUpperCase());};

let alterFile = (file) => {
  read(file) 
    .then(upperCase)
    .then(buffer =>write(file, buffer))
    .then(() => socket.emit('file-save', file))
    .catch(error => socket.emit('file-error', error));
};

let file = process.argv.slice(2).shift();
alterFile(file);

module.exports= {alterFile, file};
