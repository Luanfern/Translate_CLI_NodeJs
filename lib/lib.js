const translateFunction = require('./functions/translate');

exports.translate = async (req, res, next) => {
    let r = await translateFunction(req.body['translate']);
    res.status(200).send({
        "return": r,
    });
};

exports.homeTranslate = async (req, res, next) => {
    res.status(200).send("Bem Vindo ao Tradutor!");
};