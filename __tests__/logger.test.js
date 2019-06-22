'use strict';

jest.mock('fs');

// const ioClient = require('socket.io-client');
// const socketSpy = jest.spyOn(ioClient.socket, 'emit').mockImplementation( () => {console.log('foobar');});

const logger = require('../logger/logger');
// describe('event handlers functions', () => {
//   it('should be truthy to pass a single test for Travis', () => {
//     expect(true).toBeTruthy();
//   });
// });

describe('Logger test', ()=> {
  it('lives', () => {
    expect(logger).toBeTruthy();
  });
});