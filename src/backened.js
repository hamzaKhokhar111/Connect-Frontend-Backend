const express = require('express');
const cors = require('cors');

const app = express();
const port = 5000;

// Enable CORS for all routes
app.use(cors());

// Mock data for jokes
const jokes = [
  { id: 1, text: 'Why did the chicken cross the road? To get to the other side!' },
  { id: 2, text: 'What do you call cheese that isn\'t yours? Nacho cheese!' },
  // Add more jokes as needed
];

// Endpoint to get jokes
app.get('/jokes', (req, res) => {
  res.json(jokes);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
