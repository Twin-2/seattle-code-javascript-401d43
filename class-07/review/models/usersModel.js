'use strict';

const bcrypt = require('bcrypt');

const { sequelize, DataTypes } = require('./');

const Users = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  }
});

// make sure you define your methods (for now) on the model you've created.
// makde sure you define your function with the "function" keyword.
Users.authenticateBasic = async function(username, password) {
  const user = await this.findOne({ where: { username: username } });
  const valid = await bcrypt.compare(password, user.password);

  if (valid) return user;
  return new Error('Unauthenticated');
}

module.exports = Users;
