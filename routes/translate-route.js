const express = require('express');
const lib = require('../lib/lib');

const Router = express.Router();

Router.get('/', lib.homeTranslate);

Router.post('/', lib.translate);

module.exports = Router;