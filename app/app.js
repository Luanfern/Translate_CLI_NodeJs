const express = require('express');
const bodyParser = require('body-parser');
 
///ROUTES
const translateRoute = require('../routes/translate-route');

const app = express();

app.use(bodyParser.json());
app.use('/', translateRoute);

module.exports = app;