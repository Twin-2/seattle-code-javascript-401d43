'use strict';

// setup a postgres uri (what dbms to connect to)
const POSTGRES_URI = process.env.NODE_ENV === 'test' ? 'sqlite:memory' : process.env.DATABASE_URL;

// this pulls in the core sequlize constructor - which setups up config and db/model constraints
const { Sequelize, DataTypes } = require('sequelize');

// setup options for deploy - if not deployed, no options needed
let sequelizeOptions = process.env.NODE_ENV === 'production' ? {
  // this is about Heroku and ensuring SSL is enabled
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  }
  // otherwise, we don't need any dialect options - it will default to {} standard
} : {};

// create a new config, with our options, and our db location
let sequelize = new Sequelize(POSTGRES_URI, sequelizeOptions);

// pull in our people model (aka people schema / data constraints)
const people = require('./people.model.js');

// make all of this exportable so that we can use sequlize methods in our routes
module.exports = {
  db: sequelize,
  People: people(sequelize, DataTypes)
}