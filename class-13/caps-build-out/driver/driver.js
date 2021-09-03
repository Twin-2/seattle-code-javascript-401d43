'use strict';

const io = require('socket.io-client');
const server = io.connect('http://localhost:3000/caps');

server.on('pickup', payload => {
  console.log('package that was picked up:', payload);

  setTimeout(() => {
    server.emit('in-transit', payload);
  }, 2000);

  setTimeout(() => {
    server.emit('delivered', payload);
  }, 3000);
})