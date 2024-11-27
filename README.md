# Step by step guide to create a new AWS Lambda function in nodejs in VS Code

## 1. Set up the Event Source Map (EventSourceMap.js) to connect the Lambda function to the SQS queue

## 2. Create the index.js file

- add your Lambda function code in here

## 3. Create a Zip File Archive containing the Lambda function code file (index.js)

## 4. Create a file (uploadLambda.js) which takes your Zip file and creates the Lambda function in your AWS account

## 5. Create a file which invokes the Lambda function

- provide the payload in the params object
- use the .invoke() method on the lambda object

## Command to create a zip file and the files to add to it

- '7z a customZipFileName.zip index.js node_modules/ package.json package-lock.json' (files to add to the zip come after the customZipFileName.zip)
