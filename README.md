# Lab-18
## Socket.io

### Author: Chloie Parsons 

## Links and Resources
* [Submission PR](https://github.com/chloieparsons-401-advanced-javascript/lab-18/pull/1)
* [Travis](https://www.travis-ci.com/chloieparsons-401-advanced-javascript/lab-18)


## Modules
* ```app/app.js```
  - The socket.io client that connects to the socket.io server on PORT 3000. Perfoms an operation in the file system and emits an event to the socket.io server based on the result of the operation.

* ```logger.js```
  - The socket.io client that connects to the socket.io server on PORT 3000 and listens for broadcasts from the socket.io to the server.

* ```server.js```
  - The socket.io client that connects to the socket.io server on PORT 3000 and receives events emitted by sockets and broadcasts certain events to other sockets.


## Setup
```npm i``` to install dependencies



## Running the app
* npm start script 
```node app.js```


## Tests
* ```npm test```
* ```npm test-watch```
* ```npm lint```

##UML
![Socket.IO](./assets/socket_io.JPG)