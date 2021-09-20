'use strict';

const uuid = require('uuid').v4;
const dynamoose = require('dynamoose');
const ContactModel = require('./contacts.schema.js');

exports.handler = async (event) => {

  console.log('__EVENT__:', event);
  
  let data = await ContactModel.scan().exec();

  return {
    statusCode: 200,
    body: JSON.stringify(data)
  }
}