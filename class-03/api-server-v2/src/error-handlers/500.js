'use strict';

// This is a DEFINED piece of error handling middleware
// it is defined with 4 params -> err, req, res, next
module.exports = function(err, req, res, next) {

  const errorObj = {
    status: 500,
    message: err.message
  }

  res.status(500).send(errorObj);
}