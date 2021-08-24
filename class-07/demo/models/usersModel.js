'use strict';

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { sequelize, DataTypes } = require('./');

const API_SECRET = process.env.API_SECRET || 'secretstringfortesting';

const Users = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  token: {
    type: DataTypes.VIRTUAL,
    get() {
      // the functionality that creates our encoded token, takes some data to encode and a "signature". 'this' will refer to an instance of the model.
      // If we want our token to have specific concerns: use token only once? have it expire?
        // jwts can be configure wih those features.
      return jwt.sign({username: this.username}, API_SECRET);
    }
  }
});

// make sure you define your methods (for now) on the model you've created.
// makde sure you define your function with the "function" keyword.
Users.authenticateBasic = async function(username, password) {
  const user = await this.findOne({ where: { username: username } }); // token generation happens right here.
  const valid = await bcrypt.compare(password, user.password);
  // takes a secret and return an encoded token , lets do his 
  // let token = jwt.sign({username: user.username}, API_SECRET);
  // user.token = token;
  
  if (valid) {
    return user;
  }
  return new Error('Unauthenticated');
}

Users.authenticateBearer = async function(token) {

  // creates a token, and verifies that it came from our server.
  let parsedToken = jwt.verify(token, API_SECRET);
  let user = await this.findOne({ where: {username: parsedToken.username }});
  if (user) {
    return user;
  }
  throw new Error('Invalid Token');
}

module.exports = Users;
