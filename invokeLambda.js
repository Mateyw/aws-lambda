// Fifth -> Create a new file executable to Aws.invoke() 

const AWS = require('aws-sdk');
AWS.config.update({ region: 'eu-north-1' });

const lambda = new AWS.Lambda();

const params = {
  FunctionName: 'process-customer-message-test-6',
  InvocationType: 'RequestResponse', // RequestResponse indicates that it is a synchronous invocation; Event would be async invocation
  Payload: JSON.stringify({ // stringify the entire payload object
    Records: [
      {
        body: { 
          name: 'Test 6',
          message: 'Test message 6'
        },
      },
    ],
  }),
};


lambda.invoke(params, (err, data) => {
  if (err) {
    console.error('Error invoking Lambda:', err);
  } else {
    console.log('Lambda invoked successfully. Response metadata:');
    console.log(data); // logging data object which contains metadata

    if (data.Payload) {
      // ff the lambda returned a response, parse and log it
      const response = JSON.parse(data.Payload);
      console.log('Lambda response:', response);
    }
  }
});
