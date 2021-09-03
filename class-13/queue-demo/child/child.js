'use strict';

const client = require('socket.io-client');
const family = client.connect('http://localhost:3000/family');

family.emit('get-all');

family.on('chore', message => {
  console.log(message);
  family.emit('completed', message);
})