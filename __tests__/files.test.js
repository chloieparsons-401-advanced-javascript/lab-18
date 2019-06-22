'use strict';

jest.mock('fs');

// const ioClient = require('socket.io-client');
// const socketSpy = jest.spyOn(ioClient.socket, 'emit'); 

// const files = require('../files'); 

// describe('files module', () => { 

//   it('can load a file', () => {
//     return files.loadFile('foo.txt')
//       .then(contents => {
//         expect(Buffer.isBuffer(contents)).toBeTruthy();
//       });
//   });

//   it('can save a file in uppercase', () => {
//     const string = 'Summer Is The Best';
//     const buffer = Buffer.from(string);
//     return files.saveFile('foo.txt', buffer);

//   });
// });

describe('Files test', ()=> {
  it('lives', () => {
    expect(true).toBeTruthy();
  });
});