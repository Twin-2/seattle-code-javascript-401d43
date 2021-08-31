'use strict';

const io = require('socket.io-client');

let baseURL = 'http://localhost:3000';

let brainConnection = io.connect(baseURL);
let healthConnection = io.connect(`${baseURL}/health-system`);

healthConnection.on('smell', () => {
  console.log('smellin stuff');
})