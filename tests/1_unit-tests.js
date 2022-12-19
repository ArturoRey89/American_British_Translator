const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');
const translator = new Translator()
suite('Unit Tests', () => {
    suite("Translate to British English", () => {
        test("Translate I ate yogurt for breakfast.", (done) => {
            assert.include(
              translator
                .americanToBritish("I ate yogurt for breakfast"),
              "yoghurt"
            );
            done()
        })
        test("Translate Mangoes are my favorite fruit.", (done) => {
            assert.include(
              translator.americanToBritish(
                "Mangoes are my favorite fruit"
              ),
              "favourite"
            );
            done()
        })
        test("Translate We had a party at my friend's condo.", (done) => {
            assert.include(
              translator.americanToBritish(
                "We had a party at my friend's condo"
              ),
              "flat"
            );
            done()
        })
        test("Translate Can you toss this in the trashcan for me?", (done) => {
            assert.include(
              translator.americanToBritish(
                "Can you toss this in the trashcan for me"
              ),
              "bin"
            );
            done()
        })
        test("Translate The parking lot was full.", (done) => {
            assert.include(
              translator.americanToBritish(
                "The parking lot was full"
              ),
              "car park"
            );
            done()
        })
        test("Translate Like a high tech Rube Goldberg machine.", (done) => {
            assert.include(
              translator.americanToBritish(
                "Like a high tech Rube Goldberg machine"
              ),
              "Heath Robinson device"
            );
            done()
        }) 
        test("Translate To play hooky means to skip class or work.", (done) => {
            assert.include(
              translator.americanToBritish(
                "To play hooky means to skip class or work"
              ),
              "bunk off"
            );
            done()
        }) 
        test("Translate No Mr. Bond, I expect you to die.", (done) => {
            assert.include(
              translator.americanToBritish(
                "No Mr. Bond, I expect you to die"
              ),
              "Mr"
            );
            done()
        }) 
        test("Translate Dr. Grosh will see you now.", (done) => {
            assert.include(
              translator.americanToBritish(
                "Dr. Grosh will see you now"
              ),
              "Dr"
            );
            done()
        }) 
        test("Translate Lunch is at 12:15 today.", (done) => {
            assert.include(
              translator.americanToBritish(
                "Lunch is at 12:15 today"
              ),
              "12.15"
            );
            done()
        })
    })
    
    suite("Translate to American English", () => {
        test("Translate We watched the footie match for a while.", (done) => {
            assert.include(
              translator.britishToAmerican(
                "We watched the footie match for a while"
              ),
              "soccer"
            );
            done()
        })
        test("Translate Paracetamol takes up to an hour to work.", (done) => {
            assert.include(
              translator.britishToAmerican(
                "Paracetamol takes up to an hour to work"
              ),
              "Tylenol"
            );
            done()
        })
        test("Translate First, caramelise the onions.", (done) => {
            assert.include(
              translator
                .britishToAmerican("First, caramelise the onions")
                ,
              "caramelize"
            );
            done()
        })
        test("Translate I spent the bank holiday at the funfair.", (done) => {
            assert.include(
              translator.britishToAmerican(
                "I spent the bank holiday at the funfair"
              ),
              "public holiday"
            );
            assert.include(
              translator.britishToAmerican(
                "I spent the bank holiday at the funfair"
              ),
              "carnival"
            );
            done()
        })
        test("Translate I had a bicky then went to the chippy.", (done) => {
            assert.include(
              translator.britishToAmerican(
                "I had a bicky then went to the chippy"
              ),
              "cookie"
            );
            assert.include(
              translator.britishToAmerican(
                "I had a bicky then went to the chippy"
              ),
              "fish-and-chip shop"
            );
            done()
        })
        test("Translate I've just got bits and bobs in my bum bag.", (done) => {
            assert.include(
              translator.britishToAmerican(
                "I've just got bits and bobs in my bum bag"
              ),
              "odds and ends"
            );
            assert.include(
              translator.britishToAmerican(
                "I've just got bits and bobs in my bum bag"
              ),
              "fanny pack"
            );
            done()
        })
        test("Translate The car boot sale at Boxted Airfield was called off.", (done) => {
            assert.include(
              translator.britishToAmerican(
                "The car boot sale at Boxted Airfield was called off"
              ),
              "swap meet"
            );
            done()
        })
        test("Translate Have you met Mrs Kalyani?", (done) => {
            assert.include(
              translator
                .britishToAmerican("Have you met Mrs Kalyani")
                ,
              "Mrs."
            );
            done()
        })
        test("Translate Prof Joyner of King's College, London.", (done) => {
            assert.include(
              translator.britishToAmerican(
                "Prof Joyner of King's College, London"
              ),
              "Prof."
            );
            done()
        })
        test("Translate Tea time is usually around 4 or 4.30.", (done) => {
            assert.include(
              translator.britishToAmerican(
                "Tea time is usually around 4 or 4.30"
              ),
              "4:30"
            );
            done()
        })
    })


    suite("Highlight text", () => {
        test("Highlight translation in Mangoes are my favorite fruit.", (done) => {
            assert.include(
              translator.americanToBritish("Mangoes are my favorite fruit"),
              '<span class="highlight">favourite</span>'
            );
            done()
        })
        test("Highlight translation in I ate yogurt for breakfast.", (done) => {
            assert.include(
              translator.americanToBritish("I ate yogurt for breakfast"),
              '<span class="highlight">yoghurt</span>'
            );
            done()
        })
        test("Highlight translation in We watched the footie match for a while.", (done) => {
            assert.include(
              translator.britishToAmerican(
                "We watched the footie match for a while"
              ),
              '<span class="highlight">soccer</span>'
            );
            done()
        })
        test("Highlight translation in Paracetamol takes up to an hour to work.", (done) => {
            assert.include(
              translator.britishToAmerican(
                "Paracetamol takes up to an hour to work"
              ),
              '<span class="highlight">Tylenol</span>'
            );
            done()
        })
    })

});
