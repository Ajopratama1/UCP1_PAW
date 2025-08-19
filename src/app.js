const express = require('express');
const bodyParser = require('body-parser');
const libraryRoutes = require('./routes/libraryRoutes');
const db = require('./config/db');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});


app.use('/api/books', libraryRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});