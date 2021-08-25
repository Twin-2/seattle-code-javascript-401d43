'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const userModel = require('./users/model.js');
const foodModel = require('./food/model.js');
const clothesModel = require('./clothes/model.js');
const Collection = require('./data-collection.js');

const DATABASE_URL = process.env.DATABASE_URL || 'sqlite:memory:';

const sequelize = new Sequelize(DATABASE_URL);

// this set of consts are meant to simply give us the schema, with proper sequelize tooling
const users = userModel(sequelize, DataTypes);
const food = foodModel(sequelize, DataTypes);
const clothes = clothesModel(sequelize, DataTypes);

// this config file allows us to have an interface to directly work with any tables in our db
// when we add a new table, just the follow the convention above
module.exports = {
  db: sequelize,
  users: new Collection(users),
  food: new Collection(food),
  clothes: new Collection(clothes),
};
