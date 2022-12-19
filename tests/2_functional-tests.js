const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
const server = require('../server.js');

chai.use(chaiHttp);

let Translator = require('../components/translator.js');

suite('Functional Tests', () => {
    suite("Post request to /api/translate", () => {
        test("Translation with text and locale fields:", (done) => {
            chai
              .request(server)
              .post("/api/translate")
              .send({
                text: "I ate yogurt for breakfast",
                locale: "american-to-british",
              })
              .end((err, res) => {
                assert.notExists(res.body.error);
                assert.notEqual(res.body.translation, res.body.text)
                assert.notEqual(
                  res.body.translation,
                  "Everything looks good to me!"
                );
                assert.include(res.body.translation, "yoghurt");
                done();
              });
        }) 
        test("Translation with text and invalid locale field:", (done) => {
            chai
              .request(server)
              .post("/api/translate")
              .send({ text: "I ate yoghurt for breakfast", locale: "british-to-british" })
              .end((err, res) => {
                assert.strictEqual(
                  res.body.error,
                  "Invalid value for locale field"
                );
                done();
              });
        })
        test("Translation with missing text field:", (done) => {
            chai
              .request(server)
              .post("/api/translate")
              .send({
                locale: "american-to-british",
              })
              .end((err, res) => {
                assert.strictEqual(res.body.error, "Required field(s) missing");
                done();
              });
        })
        test("Translation with missing locale field:", (done) => {
            chai
              .request(server)
              .post("/api/translate")
              .send({
                locale: "american-to-british",
              })
              .end((err, res) => {
                assert.strictEqual(res.body.error, "Required field(s) missing");
                done();
              });
        })
        test("Translation with empty text:", (done) => {
            chai
              .request(server)
              .post("/api/translate")
              .send({ text: "", locale: "american-to-british" })
              .end((err, res) => {
                assert.strictEqual(res.body.error, "No text to translate");
                done();
              });
        })
        test("Translation with text that needs no translation:", (done) => {
            chai
              .request(server)
              .post("/api/translate")
              .send({
                text: "I ate yoghurt for breakfast",
                locale: "american-to-british",
              })
              .end((err, res) => {
                assert.strictEqual(
                  res.body.translation,
                  "Everything looks good to me!"
                );
                done();
              });
        })
    })
});
