"use strict";

const Translator = require("../components/translator.js");
const translator = new Translator();
module.exports = function (app) {
  const translator = new Translator();

  app.route("/api/translate").post((req, res) => {
    let inputText = req.body.text;
    let locale = req.body.locale;
    if (typeof inputText === "undefined" || typeof locale === "undefined") {
      res.json({ error: "Required field(s) missing" });
      return;
    }

    if (inputText == "") {
      res.json({ error: "No text to translate" });
      return;
    }

    if (locale != "american-to-british" && locale != "british-to-american") {
      res.json({ error: "Invalid value for locale field" });
      return;
    }

    if (locale == "american-to-british") {
      let britishText = translator.americanToBritish(inputText);
      if (britishText == inputText) {
        res.send({
          text: inputText,
          translation: "Everything looks good to me!",
        });
        return;
      }
      res.send({ text: inputText, translation: britishText });
      return;
    }

    if (locale == "british-to-american") {
      let americanText = translator.americanToBritish(inputText);
      if (americanText == inputText) {
        res.send({
          text: inputText,
          translation: "Everything looks good to me!",
        });
        return;
      }
      res.send({ text: inputText, translation: americanText });
      return;
    }
  });
};
