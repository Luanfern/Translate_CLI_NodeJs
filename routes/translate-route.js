const express = require('express');
const lib = require('../lib/lib');

const Router = express.Router();

Router.post('/', lib.translate);

module.exports = Router;