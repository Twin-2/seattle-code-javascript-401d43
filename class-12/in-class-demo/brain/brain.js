'use strict';

const PORT = process.env.PORT || 3000;
// http://localhost:3000 is our server for handling ALL connected clients
const io = require('socket.io')(PORT); // this is the socket.io server library and simple server config

// namespaces - which are basically the same thing as a "workspace" in Slack:
// the location of this "route" is http://localhost:3000/digestive-system
const guts = io.of('/digestive-system');
const health = io.of('/health-system');
// this is the direct connection to this server
// what is a socket here?  our socket is any connected client

// Global Connection Hub
io.on('connection', socket => {
  console.log('__GLOBAL__', socket.id);

  socket.on('light', payload => {
    io.emit('brightness', payload);
  });
});

// Management of Connection to a client that is in the digestive system namespace:
guts.on('connection', socket => {
  // we can handle actions (methods) that will handle what to do when a client connects
  // to this namespace
  console.log('connected /digestive-system namespace:', socket.id);
})

health.on('connection', socket => {
  console.log('connected to the health system namespace', socket.id);

  socket.on('smell', payload => {
    health.emit('smell');
  });
})