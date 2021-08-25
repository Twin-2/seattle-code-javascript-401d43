'use strict';

const express = require('express');
const notFound = require('./error-handlers/404.js');
const errors = require('./error-handlers/500.js');
const logger = require('./middleware/logger.js'); // 1st party / internal mw
const morgan = require('morgan'); // 3rd party mw
const coolmw = require('./middleware/coolmw.js');
const app = express();

// global (application level) mw
app.use(morgan('dev'));

app.get('/bad-route', (req, res, next) => {
  next('i dont like this route');
});

app.get('/throw-error', (req, res) => {
  throw new Error('this is broke');
});

app.get('/hello', logger, (req, res) => {
  res.status(200).send('simple');
})

// request parameter
// which is different from a query string
// http://localhost:3000/cool/12345?thing=whatever
app.get('/cool/:id', logger, coolmw, (req, res) => {
  console.log('req param', req.params.id);
  res.send(req.instructor);
});

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