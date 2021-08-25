'use strict';

const dataModules = require('../models');

{
  db: sequelize,
  users: new Collection(users), // new is a way to instantiate a new OBJECT of a specifc type -> that is our collection class
  food: new Collection(food),
  clothes: new Collection(clothes)
}

module.exports = (req, res, next) => {
  const modelName = req.params.model;
  if (dataModules[modelName]) {
    req.model = dataModules[modelName];
    next();
  } else {
    next('Invalid Model');
  }
};
