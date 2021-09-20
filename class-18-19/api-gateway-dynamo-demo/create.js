'use strict';

const uuid = require('uuid').v4;
const dynamoose = require('dynamoose');
const ContactModel = require('./contacts.schema.js');

exports.handler = async (event) => {
  try {
    const { name, phone } = JSON.parse(event.body);
    const id = uuid();
  
    const record = new ContactModel({ id, name, phone });
    const data = await record.save();
  
    return {
      statusCode: 201,
      body: JSON.stringify(data)
    }
  } catch(err) {
    return {
      statusCode: 500,
      body: err
    }
  }
}