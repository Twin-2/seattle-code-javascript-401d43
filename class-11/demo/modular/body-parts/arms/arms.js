'use strict';

const events = require('./event-pool');
const handlers = require('./arms-handlers.js');

events.on('light', handlers.coverEyes);
