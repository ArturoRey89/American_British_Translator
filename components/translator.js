const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')

class Translator {
    americanToBritish(text){
        americanTextArray = text.split(" ")
    }

    britishToAmerican(text){
        britishTextArray = text.split(" ")
    }
}

module.exports = Translator;