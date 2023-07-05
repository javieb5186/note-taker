// import packages and js files.
const express = require('express');
const path = require('path');
const api = require('./routes/index');

// Initialize app and it's middleware
const app = express();
app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);

// Routes to home
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/notes.html'));
});

// Start server
app.listen(3001, () => console.log('Application on http://localhost:3001'));
