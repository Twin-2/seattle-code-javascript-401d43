'use strict';

const events = require('./event-pool.js');

events.on('light', coverEyes);

function coverEyes(payload) {
  if (payload.brightness > 75) {
    console.log('i am covering my eyes');
  }
}