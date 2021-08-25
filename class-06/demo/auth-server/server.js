'use strict';

require('dotenv').config();

// 3RD PARTY NPM
const express = require('express');
const bcrypt = require('bcrypt');
const base64 = require('base-64');
const { Sequelize, DataTypes } = require('sequelize');

// APP CONSTANTS
const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json()); // parse on POST / PUT request

const sequelize = new Sequelize('postgres://localhost:5432/auth-sample-demo');

// this schema will define and create a User table in our database
const Users = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
})

// HINT - this could be helpful in your signup route - have this live in your Users schema file
Users.beforeCreate((user, options) => {
  console.log(user); // what could you do with this "pre" hook before a user is created
})

// signup will have the username and password on the req body
// our req/res handler is async because it needs to do hashing, which takes a sec
// req.body is where the username and password are held
app.post('/signup', async (req, res) => {
  // sign up does 2 primary things:
  // 1 - hash the password
  // 2 - save the user, with the hashed pw to the database
  // all of this information is passed over via the req.body
  req.body.password = await bcrypt.hash(req.body.password, 10);
  const record = await Users.create(req.body);
  res.status(201).json(record);
})

// req.headers.authorization is where we hold your username:password on signin
app.get('/signin', async (req, res) => {
  // signin grabs a username and password off of the request authorizaqtion header
  // it looks like this:  'Basic jksnfdldsn:jsdnflsdnld'
  // the job of this route is to then take that username, find one in the db
  // then compare the password passed over the req.header with that of what is in the db (hashed password)
  // if it worked, move along you are authorized
  // if it didn't, do not proceed
  let basicHeaderParts = req.headers.authorization; // 'Basic fosidnfoi:sdninsfd'
  let user = basicHeaderParts.split(' ').pop(); // ['Basic', 'fosidnfoi:sdninsfd'] -> pop -> 'fosidnfoi:sdninsfd'
  let decoded = base64.decode(user); // 'fosidnfoi:sdninsfd' -> decode -> 'username:password'
  let [username, password] = decoded.split(':');
  // the below is the same as the above:
  // let username = decoded.split(':')[0]
  // let password = decoded.split(':')[1]

  // we have grabbed the username off of the req authorization header, that will allow us to find
  // a user in the db with that name
  const foundUser = await Users.findOne({ where: { username: username }});

  // once we have a user back from the database, let's compare the plain text password
  // that came in from our authorization header against that of what is in the db (hashed pw)
  const valid = await bcrypt.compare(password, foundUser.password);

  if (valid) {
    res.status(200).json(foundUser);
  } else {
    res.status(500).json({ msg: 'invalid user' })
  }
})

sequelize.sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`listening on: ${PORT}`)
    });
  })
  .catch(e => console.error(e));