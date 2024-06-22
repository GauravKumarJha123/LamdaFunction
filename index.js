exports.handler = async (event) => {
    const key1 = event.key1; 
      const key2 = event.key2; 
      const key3 = event.key3;
    // TODO implement
    const response = {
      statusCode: 200,
      body: JSON.stringify('Hello from Lambda!'),
      message: 'I am the message from lambda function',
      key1: key1,
      key2: key2,
      key3: key3
    };
    return response;
  };
  