const AWS = require('aws-sdk');
const s3 = new AWS.S3();

exports.handler = function(event, context, callback) {
  console.log('reading event options', JSON.stringify(event, undefined, 2));

  return {
    statusCode: 200,
    body: 'whatever'
  }
}