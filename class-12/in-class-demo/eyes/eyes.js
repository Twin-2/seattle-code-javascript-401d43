'use strict';

const io = require('socket.io-client');
let host = 'http://localhost:3000';

const brain = io.connect(host);

brain.on('brightness', payload => {
  if (payload.level > 75) {
    console.log('eyes are squinting');
  } else {
    console.log('not too bright today');
  }
})