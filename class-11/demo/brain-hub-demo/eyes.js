'use strict';

const events = require('./event-pool.js');

events.on('light', squint);

events.on('light', seeLight);

function squint(payload) {
  if (payload.brightness > 50) {
    console.log('eyes are squinting')
  }
}

function seeLight(payload) {
  console.log('my eyes are recieving light from the sun');
}

setInterval(() => {
  let brightness = Math.ceil(Math.random() * 100);
  events.emit('light-detected', brightness);
}, 3000)

module.exports = { squint, seeLight };