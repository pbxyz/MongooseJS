const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const port = 8080;

app.listen(port, () => {
    console.log('app listening on port: ' + port);
})
