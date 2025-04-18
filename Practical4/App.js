// Import Express.js framework to build the web server
const express = require('express');
// Create an instance of Express application
const app = express();
// Define port to run the server on (use environment variable if available, otherwise use 3000)
const port = process.env.PORT || 3000;

// Define a route handler for GET requests to the root URL ('/')
app.get('/', (req, res) => {
  // Send HTML response when someone visits the website
  res.send('<h1>Hello I am Tenzin Namgay!</h1><p>This is a pre-built Docker image pushed to DockerHub</p>');
});

// Start the server and listen for incoming requests on the specified port
app.listen(port, () => {
  // Log a message when the server starts successfully
  console.log(`Server running on port ${port}`);
});