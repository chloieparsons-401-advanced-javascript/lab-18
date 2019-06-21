'use strict';

jest.mock('fs');

const ioClient = require('socket.io-client');
const socketSpy = jest.spyOn(ioClient.socket, 'emit').mockImplementation( () => {console.log('foobar');});

//SEE DEMO at 9:40-ish on June 20

const file = require('../files'); //replace with app and logger modules

describe('files module', () => { 

  it('can load a file', () => {

  });
  it('can alter a file', () => {
    return file.alterFile('foo.txt')

  });
});