// import packages and js files.
const express = require('express');
const path = require('path');
const api = require('./Develop/routes/index');
const PORT = process.env.PORT || 3001;

// Initialize app and it's middleware
const app = express();
app.use(express.json());
app.use(express.static('Develop/public'));
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);

// Routes to home
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/Develop/public/index.html'));
});

app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '/Develop/public/notes.html'));
});

// Start server
app.listen(PORT, () => console.log(`Application on ${PORT}`));
