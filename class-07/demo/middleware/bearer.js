'use strict';

// Whyyyyy???? SO we can authenticate our user.
//    why not just continue to use Basic?
//    we are hiding sensitive information from our requests
const Users = require('../models/usersModel.js');

async function bearer(req, res, next) {
  try {
    let bearerHeaderParts = req.headers.authorization.split(' ') // `[bearer,  eyJhbGciOiJIUzI1NiJ9.SmFjb2I.ZoQH4icxD2B3c3Zs1iMrUX-VVu8Qud-OTHA8LRRI_-U];

    let token = bearerHeaderParts[1];
    let user = await Users.authenticateBearer(token);
    
    req.user = user;
    next();
  } catch(e) {
    next('bearer authentication error, are you passing a token??');
  }
}


module.exports = bearer;
