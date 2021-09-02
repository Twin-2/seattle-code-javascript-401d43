'use strict';

// pull in the AWS SDK - this is a whole bunch of service based methods and helpers
// it allows us to talk to AWS directly
const AWS = require('aws-sdk');

// point to the location of the AWS servers that we are talking to
AWS.config.update({ region: 'us-west-2' });

sendMessage();

function sendMessage() {
  const messageParams = {
    Message: 'use the following code to save 10% off your next order: gap123',
    TopicArn: 'arn:aws:sns:us-west-2:707851591631:cool-test-topic'
  }

  const publishMsg = new AWS.SNS({ apiVersion: '2010-03-31' }).publish(messageParams).promise();

  publishMsg.then(data => {
    console.log('published', data.MessageId);
  }).catch(err => console.log(err))
}