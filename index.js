const express = require('express');
const app = express();

app.get('/crop-data', (req, res) => {
  // Code to retrieve and return data on crop conditions
});

app.get('/optimize-yield', (req, res) => {
  // Code to suggest ways to optimize crop yield
});

app.listen(3000, () => {
  console.log('Smart Agriculture API listening on port 3000!');
});
