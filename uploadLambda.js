// Fourth -> deploy the lambda using the SDK (creating)
require('dotenv').config();

const AWS = require('aws-sdk');
const fs = require('fs');

// set the region
AWS.config.update({ region: 'eu-north-1' });

// create a new lambda instance
const lambda = new AWS.Lambda();

// read the zip file
const zipFile = fs.readFileSync('test6.zip');

const roleArn = process.env.ROLE_ARN;

// define the parameters for creating or updating the function
const params = {
  FunctionName: 'process-customer-message-test-6',
  Role: roleArn, // the provided role contains two policies: AWSLambdaBasicExecutionRole-8a279c9a-6ed7-4a42-8dcc-4f48cb0b865c and the AWSLambdaSQSQueueExecutionRole to allow the Lambda function to execute with basic permissions for logging to Amazon CloudWatch and to read messages from Amazon SQS queues

  // attaching the zipfile with the compressed data (lambda function and dependencies)
  Code: {
    ZipFile: zipFile,
  },
  Handler: 'index.handler', // telling the lambda function which file and name to look for the handler index.handler
  Runtime: 'nodejs22.x', // nodejs runtime version
};

// updates the Lambda function code with .updateFunctionCode() or creates a new function with .createFunction()
lambda.createFunction(params, (err, data) => {
  if (err) {
    console.error('Error updating Lambda function:', err);
  } else {
    console.log('Lambda function updated successfully:', data);
  }
});
