'use strict';

const events = require('./event-pool');

require('./body-parts/arms/arms.js');
require('./body-parts/eyes/eyes.js');

events.on('light-detected', (payload) => {
  events.emit('light', { brightness: payload })
});
