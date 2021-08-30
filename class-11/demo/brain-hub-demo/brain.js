'use strict';

const events = require('./event-pool.js');

require('./eyes.js');
require('./arms.js');

events.on('light-detected', function(payload) {
  events.emit('light', { brightness: payload });
});