//First ->  set up the lambda config

require('dotenv').config();

const AWS = require('aws-sdk');

AWS.config.update({ region: 'eu-north-1' });

const lambda = new AWS.Lambda();

const params = {
  EventSourceArn: process.env.EVENT_SOURCE_ARN,
  FunctionName: 'process-customer-message-test-6',
  BatchSize: 10,
  Enabled: true
};

lambda.createEventSourceMapping(params, (err, data) => {
  if (err) console.error(err);
  else console.log("Event source mapping created:", data);
});

