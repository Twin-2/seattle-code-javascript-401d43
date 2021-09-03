'use strict';

const client = require('socket.io-client');
const family = client.connect('http://localhost:3000/family');

const chore = process.argv.splice(2)[0];

family.emit('new-chore', chore);

family.on('added', () => {
  family.disconnect();
})