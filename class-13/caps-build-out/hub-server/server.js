'use strict';

const io = require('socket.io')(3000);
const caps = io.of('/caps');

// "socket" represents the connected client
caps.on('connection', socket => {
  console.log(socket.id);

  // the .on('join-room') is NOT built into socket.io
  socket.on('join-room', room => {
    // the .join method IS built into socket.io
    socket.join(room);
  });

  socket.on('pickup', payload => {
    logger('pickup:', payload);
    caps.emit('pickup', payload);
  })

  socket.on('in-transit', payload => {
    logger('in transit:', payload);
    caps.emit('in-transit', payload);
  })

  socket.on('delivered', payload => {
    logger('delivered:', payload);
    caps.emit('delivered', payload);
  })
});

function logger(event, payload) {
  let time = new Date(); // we can access this from the socket
  console.log({ time, event, payload });
}