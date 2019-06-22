'use strict';

const io = {};

io.listener = port => {
  console.log('Listener On', port);
};

io.connect = () => {
  return io.socket;
};

io.socket = {
  on: (command, callback) => {
    console.log('listening to', command);
  },

  emit: (command, payload, callback) => {
    console.log('emit');
  },
};

module.exports = io;
