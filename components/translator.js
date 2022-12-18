const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')
const britishToAmericanSpelling = inverse(americanToBritishSpelling)
const britishToAmericanTitles = inverse(americanToBritishTitles);

function inverse(obj) {
    var retobj = {};
    for (var key in obj) {
        retobj[obj[key]] = key;
    }
    return retobj;
}

class Translator {
    americanToBritish(text){
        let americanTextArray = text.split(/([/"/',.\s])/);
        let editedWord; 
        let britishTextArray = americanTextArray.flatMap((element,index) => {
          //spelling
          if (americanToBritishSpelling[element.toLowerCase()]) {
            editedWord = americanToBritishSpelling[element.toLowerCase()];
            return editedWord;
          }
          //original words
          if (americanOnly[element.toLowerCase()]) {
            editedWord = americanOnly[element.toLowerCase()];
            return editedWord;
          }
          //compound original words
          if (americanTextArray.length > index + 2) {
            let compoundWord =
              element.toLowerCase() +
              " " +
              americanTextArray[index + 2].toLowerCase();
            if (americanOnly[compoundWord]) {
              americanTextArray.splice(index + 1, 2);
              editedWord = americanOnly[compoundWord];
              return editedWord;
            }
          }
          if (americanTextArray.length > index + 4) {
            let compoundWord =
              element.toLowerCase() +
              " " +
              americanTextArray[index + 2].toLowerCase() +
              " " +
              americanTextArray[index + 4].toLowerCase();
            if (americanOnly[compoundWord]) {
              americanTextArray.splice(index + 1, 4);
              editedWord = americanOnly[compoundWord];
              return editedWord;
            }
          }
          //Titles
          if (americanTextArray.length > index + 1) {
            let punctuatedWord =
              element.toLowerCase() +
              americanTextArray[index + 1].toLowerCase();
            if (americanToBritishTitles[punctuatedWord]) {
              americanTextArray.splice(index + 1, 1);
              let britishTitle = americanToBritishTitles[punctuatedWord];
              britishTitle =
                britishTitle.charAt(0).toUpperCase() + britishTitle.slice(1)
              return britishTitle;
            }
          }
          //Time format
          let americanTimeFormat = /[0-9]{1,2}:[0-9]{2}/;
          if (americanTimeFormat.test(element)) {
            let [hour, minutes] = element.split(":");
            return hour + "." + minutes;
          }

          return element;
        });
        return britishTextArray.join("");
    }

    britishToAmerican(text){
        let britishTextArray = text.split(/([/"/',.\s])/);
        let editedWord;
        let americanTextArray = britishTextArray.flatMap((element, index) => {
          //spelling
          if (britishToAmericanSpelling[element.toLowerCase()]) {
            editedWord = britishToAmericanSpelling[element.toLowerCase()];
            return editedWord;
          }
          //compound original words
          if (britishTextArray.length > index + 4) {
            let compoundWord =
              element.toLowerCase() +
              " " +
              britishTextArray[index + 2].toLowerCase() +
              " " +
              britishTextArray[index + 4].toLowerCase();
            if (britishOnly[compoundWord]) {
              britishTextArray.splice(index + 1, 4);
              editedWord = britishOnly[compoundWord];
              return editedWord;
            }
          }
          if (britishTextArray.length > index + 2) {
            let compoundWord =
              element.toLowerCase() +
              " " +
              britishTextArray[index + 2].toLowerCase();
            if (britishOnly[compoundWord]) {
              britishTextArray.splice(index + 1, 2);
              editedWord = britishOnly[compoundWord];
              return editedWord;
            }
          }
          //original words
          if (britishOnly[element.toLowerCase()]) {
            editedWord = britishOnly[element.toLowerCase()];
            return editedWord;
          }
          //titles
          if (britishToAmericanTitles[element.toLowerCase()]) {
            let americanTitle = britishToAmericanTitles[element.toLowerCase()];
            americanTitle =
              americanTitle.charAt(0).toUpperCase() + americanTitle.slice(1);
            return americanTitle;
          }
          //Time format
          if(britishTextArray.length > index + 2) {
            let timeString =
              element +
              britishTextArray[index + 1] +
              britishTextArray[index + 2];
            let britishTimeFormat = /[0-9]+\.[0-9]{2}/;
            if (britishTimeFormat.test(timeString)) {
              let [hour, minutes] = timeString.split(".");
              britishTextArray.splice(index + 1, 2);
              return hour + ":" + minutes;
            }
          }

          return element;
        });

        return americanTextArray.join("");
    }
}

module.exports = Translator;