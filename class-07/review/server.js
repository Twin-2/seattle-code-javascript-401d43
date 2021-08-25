require('dotenv').config();

// 3rd Party Resources
const express = require('express');
const bcrypt = require('bcrypt');
const Users = require('./models/usersModel.js');
const basic = require('./middleware/basic.js');

// Prepare the express app
const app = express();

// Process JSON input and put the data on req.body
app.use(express.json());

// Process FORM intput and put the data on req.body
app.use(express.urlencoded({ extended: true }));


app.post('/signup', async (req, res) => {

  // bcrypt.hash((req.body.password), 10)
  // .then(hashedPassword => {
  //   req.body.password = hashedPassword;
  // })

  try {
    req.body.password = await bcrypt.hash(req.body.password, 10);
    const record = await Users.create(req.body);
    res.status(200).json(record);
  } catch (e) { res.status(403).send("Error Creating User"); }
});

app.post('/signin', basic, async (req, res) => {
  const { user } = req;

  res.status(200).send(user);
});

module.exports = app;
