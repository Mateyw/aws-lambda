// Second -> copy and past the code into another file

// here
exports.handler = async (event) => {
  try {
    console.log("Received event:", JSON.stringify(event, null, 2));

    // check if event object contains Records array with record objects (= one record object represents one message)
    // throws error if there are is no Records array, hence also no record objects
    if (!Array.isArray(event.Records)) {
      throw new Error('Event does not contain Records.');
    }

    // loop through the Records array and assign the body of each record (message) to a constant messagebody
    for (const record of event.Records) {
      // Ensure body is already an object and not a string
      const messageBody = record.body;
      //log the messagebody
      console.log("Received message:", messageBody);

      // check if body is a string and parse it to a js object
      if (typeof messageBody === 'string') {
        messageBody = JSON.parse(messageBody);
      }
      // log the contents of the messagebody (name and message)
      console.log(`Customer Name: ${messageBody.name}`);
      console.log(`Message: ${messageBody.message}`);
    }

    // if successful, return 200 status code and JSON string message
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Messages processed successfully" }),
    };
    // catch any errors while processing a message
  } catch (error) {
    console.error("Error processing messages:", error);
    throw error; 
  }
};
