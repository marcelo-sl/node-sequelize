const express = require('express');
const db = require('./config/database');
const bodyParser = require('body-parser');

// Creating the app
const app = express();

// Using body-parser to get request in json format
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Index');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
