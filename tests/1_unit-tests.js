const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');
const translator = new Translator()
suite('Unit Tests', () => {
    suite("Translate to British English", () => {
        test("Translate I ate yogurt for breakfast.", (done) => {
            assert.equal(
              translator.americanToBritish(
                "Translate I ate yogurt for breakfast."
              ),
              "Translate I ate yoghurt for breakfast."
            );
            done()
        })
        test("Translate Mangoes are my favorite fruit.", (done) => {
            assert.equal(
              translator.americanToBritish(
                "Translate Mangoes are my favorite fruit."
              ),
              "Translate Mangoes are my favourite fruit."
            );
            done()
        })
        test("Translate We had a party at my friend's condo.", (done) => {
            assert.equal(
              translator.americanToBritish(
                "Translate We had a party at my friend's condo."
              ),
              "Translate We had a party at my friend's flat."
            );
            done()
        })
        test("Translate Can you toss this in the trashcan for me?", (done) => {
            assert.equal(
              translator.americanToBritish(
                "Translate Can you toss this in the trashcan for me?"
              ),
              "Translate Can you toss this in the bin for me?"
            );
            done()
        })
        test("Translate The parking lot was full.", (done) => {
            assert.equal(
              translator.americanToBritish(
                "Translate The parking lot was full."
              ),
              "Translate The car park was full."
            );
            done()
        })
        test("Translate Like a high tech Rube Goldberg machine.", (done) => {
            assert.equal(translator.americanToBritish(),);
            done()
        }) 
        test("Translate To play hooky means to skip class or work.", (done) => {
            assert.equal(
              translator.americanToBritish(
                "Translate Like a high tech Rube Goldberg machine."
              ),
              "Translate Like a high tech Heath Robinson device."
            );
            done()
        }) 
        test("Translate No Mr. Bond, I expect you to die.", (done) => {
            assert.equal(
              translator.americanToBritish(
                "Translate No Mr. Bond, I expect you to die."
              ),
              "Translate No Mr Bond, I expect you to die."
            );
            done()
        }) 
        test("Translate Dr. Grosh will see you now.", (done) => {
            assert.equal(
              translator.americanToBritish(
                "Translate Dr. Grosh will see you now."
              ),
              "Translate Dr Grosh will see you now."
            );
            done()
        }) 
        test("Translate Lunch is at 12:15 today.", (done) => {
            assert.equal(
              translator.americanToBritish(
                "Translate Lunch is at 12:15 today."
              ),
              "Translate Lunch is at 12.15 today."
            );
            done()
        })
    })
    
    suite("Translate to American English", () => {
        test("Translate We watched the footie match for a while.", (done) => {
            assert.equal(
              translator.americanToBritish(
                "Translate We watched the footie match for a while."
              ),
              "Translate We watched the soccer match for a while."
            );
            done()
        })
        test("Translate Paracetamol takes up to an hour to work.", (done) => {
            assert.equal(
              translator.americanToBritish(
                "Translate Paracetamol takes up to an hour to work."
              ),
              "Translate Tylenol takes up to an hour to work."
            );
            done()
        })
        test("Translate First, caramelise the onions.", (done) => {
            assert.equal(
              translator.americanToBritish(
                "Translate First, caramelise the onions."
              ),
              "Translate First, caramelize the onions."
            );
            done()
        })
        test("Translate I spent the bank holiday at the funfair.", (done) => {
            assert.equal(
              translator.americanToBritish(
                "Translate I spent the bank holiday at the funfair."
              ),
              "Translate I spent the public holiday at the carnival."
            );
            done()
        })
        test("Translate I had a bicky then went to the chippy.", (done) => {
            assert.equal(
              translator.americanToBritish(
                "Translate I had a bicky then went to the chippy."
              ),
              "Translate I had a cookie then went to the fish-and-chip shop."
            );
            done()
        })
        test("Translate I've just got bits and bobs in my bum bag.", (done) => {
            assert.equal(
              translator.americanToBritish(
                "Translate I've just got bits and bobs in my bum bag."
              ),
              "Translate I've just got odds and ends in my fanny pack."
            );
            done()
        })
        test("Translate The car boot sale at Boxted Airfield was called off.", (done) => {
            assert.equal(
              translator.americanToBritish(
                "Translate The car boot sale at Boxted Airfield was called off."
              ),
              "Translate The swap meet at Boxted Airfield was called off."
            );
            done()
        })
        test("Translate Have you met Mrs Kalyani?", (done) => {
            assert.equal(
              translator.americanToBritish(
                "Translate Have you met Mrs Kalyani?"
              ),
              "Translate Have you met Mrs. Kalyani?"
            );
            done()
        })
        test("Translate Prof Joyner of King's College, London.", (done) => {
            assert.equal(
              translator.americanToBritish(
                "Translate Prof Joyner of King's College, London."
              ),
              "Translate Prof. Joyner of King's College, London."
            );
            done()
        })
        test("Translate Tea time is usually around 4 or 4.30.", (done) => {
            assert.equal(
              translator.americanToBritish(
                "Translate Tea time is usually around 4 or 4.30."
              ),
              "Translate Tea time is usually around 4 or 4:30."
            );
            done()
        })
    })
    
    
    suite("Highlight text", () => {
        test("Highlight translation in Mangoes are my favorite fruit.", (done) => {
            done()
        })
        test("Highlight translation in I ate yogurt for breakfast.", (done) => {
            done()
        })
        test("Highlight translation in We watched the footie match for a while.", (done) => {
            done()
        })
        test("Highlight translation in Paracetamol takes up to an hour to work.", (done) => {
            done()
        })
    })

});
