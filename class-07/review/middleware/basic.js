'use strict';

const Users = require('../models/usersModel.js');
const base64 = require('base-64');

// next is a function that moves the request object to the next "middleware";
async function basic(req, res, next) {
  try {

    // this is our basic authentication middleware
    let basicHeaderParts = req.headers.authorization.split(' ');  // ['Basic', 'sdkjdsljd=']
    let encodedString = basicHeaderParts.pop();  // sdkjdsljd=
    let decodedString = base64.decode(encodedString); // "username:password"
    let [username, password] = decodedString.split(':'); // username, password
    
    const user = await Users.authenticateBasic(username, password);
    req.user = user;
    next();

  } catch(e) {
    console.log(e);
    // instead of passing to the next middleware, it triggers an error.
    next(e);
    // throw new Error(e);
  }
}

module.exports = basic;
