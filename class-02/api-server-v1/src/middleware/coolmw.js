'use strict';

module.exports = (req, res, next) => {
  req.instructor = 'brian';
  next();
}