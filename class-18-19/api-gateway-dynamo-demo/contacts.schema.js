'use strict';

const dynamoose = require('dynamoose');

const contactsSchema = new dynamoose.Schema({
  'id': String,
  'name': String,
  'phone': String
});

// 'contacts' is a table in dynamodb
// it is a "collection" in mongodb
// they are pretty much the same thing
module.exports = dynamoose.model('contacts', contactsSchema);