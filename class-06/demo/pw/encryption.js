'use strict';

const bcrypt = require('bcrypt'); // encryption for password hashing and comparison
const base64 = require('base-64'); // encoding/decoding for user:pw on the req.authorization header

// ---- BASE 64 - this is for encoding of username:password for signin //

let string = 'bnates:cool@pw';

let encoded = base64.encode(string);

// console.log('encoded', encoded);

let decoded = base64.decode(encoded);

// console.log('decoded', decoded);

// ------  HASHING - this is for encrpytion of a password on sign up and the comparison of a pw of sign in //

let password = 'coolpassword';
let complexity = 5;

encrypt(password, complexity)

async function encrypt(pw, salt) {

  let hashed1 = await bcrypt.hash(pw, salt);
  // console.log(hashed1);

  let compared = await bcrypt.compare('coolpassword', hashed1);
  console.log('is this the same password as the hash?', compared);

}