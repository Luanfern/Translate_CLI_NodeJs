const express = require('express');
const lib = require('../lib/lib');

const Router = express.Router();

Router.post('/', (req, res, next) => {
    let r = req.body['translate'];
    res.status(200).send({
        "return": lib['translate'](r),
    });
});

module.exports = Router;