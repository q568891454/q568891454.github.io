const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Middleware
app.use(bodyParser.json());

// Allow CORS (Cross-Origin Resource Sharing)
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// Endpoint to receive data
app.post('/data', (req, res) => {
  console.log(`Choice: ${req.body.choice}, Time: ${req.body.time}ms`);
  res.status(200).send('Data received');
});

// Start server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});