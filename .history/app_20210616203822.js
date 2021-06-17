const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Book = require('./Book.model');

const db = 'mongodb://localhost/library';
const app = express();
const port = 8080;

mongoose.connect(db);

app.get('/', (req, res) => {
    res.send('happy to be here');
})

app.listen(port, () => {
    console.log('app listening on port: ' + port);
})
