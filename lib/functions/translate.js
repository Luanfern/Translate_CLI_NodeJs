'use strict'

const axios = require('axios');

async function translate(toTranslate) {
    var wordRet = '';

    const encodedParams = new URLSearchParams();
    encodedParams.append("q", toTranslate);
    encodedParams.append("target", "pt");
    encodedParams.append("source", "en");

    const options = {
        method: 'POST',
        url: 'https://google-translate1.p.rapidapi.com/language/translate/v2',
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'Accept-Encoding': 'application/gzip',
            'X-RapidAPI-Key': 'b189e34d98mshff034f2907585f4p177083jsn2539895b444d',
            'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
        },
        data: encodedParams
    };

    try {
        await axios.request(options).then(function (response) {
            console.log(response.data.data.translations[0].translatedText);
            wordRet = response.data.data.translations[0].translatedText;
        });
    } catch (error) {
        console.error(error);
        wordRet = `error: ${error}`;
    }

    return wordRet;

}

module.exports = translate;