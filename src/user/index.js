console.log('Loading function');
const AWS = require('aws-sdk');

const docClient = new AWS.DynamoDB.DocumentClient();

exports.handler = (event, context, callback) => {
  docClient.scan({
    TableName: 'testpipeline-hexagonal',
  }, (err, data) => {
    if (err) {
      console.log('Error', err);
    } else {
      console.log('Success', data);
    }
    callback(null, data);
  });
};
