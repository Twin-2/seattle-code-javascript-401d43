'use strict';

// the Events module is a 1st party module (built into node)
const Events = require('events');
const events = new Events(); // this is what we bind our events to

// to create an event, we use the .on() method
// to fire an event, we use the .emit() method

events.on('laugh', function() {
  console.log('hahahahahahahaha');
});

events.on('cry', function() {
  console.log('wawawawwawawawawawa');
});

events.on('logger', () => {
  events.emit('laugh');
  events.emit('cry');
});

events.emit('logger');