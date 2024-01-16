// server/server.js
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, '../public')));

// Define a sample API endpoint
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from the server!' });
});

// Serve the React app for any other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/scripts/app.js'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
