'use strict';

const express = require('express');
const peopleRoutes = require('./routes/people.js');
const notFound = require('./error-handlers/404.js');
const errors = require('./error-handlers/500.js');
const logger = require('./middleware/logger.js'); // 1st party / internal mw
const morgan = require('morgan'); // 3rd party mw
const cors = require('cors');
const app = express();

// global (application level) mw
app.use(morgan('dev'));
app.use(express.json()); // parse req.body
app.use(cors());

app.use(peopleRoutes);

app.use('*', notFound);
app.use(errors); // this goes at the bottom of your server (after routes/other middleware)

module.exports = {
  server: app,
  start: port => {
    app.listen(port, () => {
      console.log(`server up: ${port}`);
    })
  }
}