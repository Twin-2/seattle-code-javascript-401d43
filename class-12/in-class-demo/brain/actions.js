'use strict';

const io = require('socket.io-client');
let host = 'http://localhost:3000';

const brain = io.connect(`${host}`);
const health = io.connect(`${host}/health-system`);

setInterval(function() {
  brain.emit('light', { level: 80 });
  health.emit('smell')
}, 3000)