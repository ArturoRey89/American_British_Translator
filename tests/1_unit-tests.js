const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');
const translator = new Translator()
suite('Unit Tests', () => {
    suite("Translate to British English", () => {
        test("Translate I ate yogurt for breakfast.", (done) => {
            assert.includeMembers(
              translator
                .americanToBritish("I ate yogurt for breakfast")
                .split(" "),
              "I ate yoghurt for breakfast".split(" ")
            );
            done()
        })
        test("Translate Mangoes are my favorite fruit.", (done) => {
            assert.includeMembers(
              translator.americanToBritish(
                "Mangoes are my favorite fruit"
              ).split(" "),
              "Mangoes are my favourite fruit".split(" ")
            );
            done()
        })
        test("Translate We had a party at my friend's condo.", (done) => {
            assert.includeMembers(
              translator.americanToBritish(
                "We had a party at my friend's condo"
              ).split(" "),
              "We had a party at my friend's flat".split(" ")
            );
            done()
        })
        test("Translate Can you toss this in the trashcan for me?", (done) => {
            assert.includeMembers(
              translator.americanToBritish(
                "Can you toss this in the trashcan for me"
              ).split(" "),
              "Can you toss this in the bin for me".split(" ")
            );
            done()
        })
        test("Translate The parking lot was full.", (done) => {
            assert.includeMembers(
              translator.americanToBritish(
                "The parking lot was full"
              ).split(" "),
              "The car park was full".split(" ")
            );
            done()
        })
        test("Translate Like a high tech Rube Goldberg machine.", (done) => {
            assert.includeMembers(
              translator.americanToBritish(
                "Like a high tech Rube Goldberg machine"
              ).split(" "),
              "Like a high tech Heath Robinson device".split(" ")
            );
            done()
        }) 
        test("Translate To play hooky means to skip class or work.", (done) => {
            assert.includeMembers(
              translator.americanToBritish(
                "To play hooky means to skip class or work"
              ).split(" "),
              "To bunk off means to skip class or work".split(" ")
            );
            done()
        }) 
        test("Translate No Mr. Bond, I expect you to die.", (done) => {
            assert.includeMembers(
              translator.americanToBritish(
                "No Mr. Bond, I expect you to die"
              ).split(" "),
              "No Mr Bond, I expect you to die".split(" ")
            );
            done()
        }) 
        test("Translate Dr. Grosh will see you now.", (done) => {
            assert.includeMembers(
              translator.americanToBritish(
                "Dr. Grosh will see you now"
              ).split(" "),
              "Dr Grosh will see you now".split(" ")
            );
            done()
        }) 
        test("Translate Lunch is at 12:15 today.", (done) => {
            assert.includeMembers(
              translator.americanToBritish(
                "Lunch is at 12:15 today"
              ).split(" "),
              "Lunch is at 12.15 today".split(" ")
            );
            done()
        })
    })
    
    suite("Translate to American English", () => {
        test("Translate We watched the footie match for a while.", (done) => {
            assert.includeMembers(
              translator.britishToAmerican(
                "We watched the footie match for a while"
              ).split(" "),
              "We watched the soccer match for a while".split(" ")
            );
            done()
        })
        test("Translate Paracetamol takes up to an hour to work.", (done) => {
            assert.includeMembers(
              translator.britishToAmerican(
                "Paracetamol takes up to an hour to work"
              ).split(" "),
              "Tylenol takes up to an hour to work".split(" ")
            );
            done()
        })
        test("Translate First, caramelise the onions.", (done) => {
            assert.includeMembers(
              translator
                .britishToAmerican("First, caramelise the onions")
                .split(" "),
              "First, caramelize the onions".split(" ")
            );
            done()
        })
        test("Translate I spent the bank holiday at the funfair.", (done) => {
            assert.includeMembers(
              translator.britishToAmerican(
                "I spent the bank holiday at the funfair"
              ).split(" "),
              "I spent the public holiday at the carnival".split(" ")
            );
            done()
        })
        test("Translate I had a bicky then went to the chippy.", (done) => {
            assert.includeMembers(
              translator.britishToAmerican(
                "I had a bicky then went to the chippy"
              ).split(" "),
              "I had a cookie then went to the fish-and-chip shop".split(" ")
            );
            done()
        })
        test("Translate I've just got bits and bobs in my bum bag.", (done) => {
            assert.includeMembers(
              translator.britishToAmerican(
                "I've just got bits and bobs in my bum bag"
              ).split(" "),
              "I've just got odds and ends in my fanny pack".split(" ")
            );
            done()
        })
        test("Translate The car boot sale at Boxted Airfield was called off.", (done) => {
            assert.includeMembers(
              translator.britishToAmerican(
                "The car boot sale at Boxted Airfield was called off"
              ).split(" "),
              "The swap meet at Boxted Airfield was called off".split(" ")
            );
            done()
        })
        test("Translate Have you met Mrs Kalyani?", (done) => {
            assert.includeMembers(
              translator
                .britishToAmerican("Have you met Mrs Kalyani")
                .split(" "),
              "Have you met Mrs. Kalyani".split(" ")
            );
            done()
        })
        test("Translate Prof Joyner of King's College, London.", (done) => {
            assert.includeMembers(
              translator.britishToAmerican(
                "Prof Joyner of King's College, London"
              ).split(" "),
              "Prof. Joyner of King's College, London".split(" ")
            );
            done()
        })
        test("Translate Tea time is usually around 4 or 4.30.", (done) => {
            assert.includeMembers(
              translator.britishToAmerican(
                "Tea time is usually around 4 or 4.30"
              ).split(" "),
              "Tea time is usually around 4 or 4:30".split(" ")
            );
            done()
        })
    })


    suite("Highlight text", () => {
        test("Highlight translation in Mangoes are my favorite fruit.", (done) => {
            assert.include(
              translator.americanToBritish("Mangoes are my favorite fruit"),
              '<span class="highlight"> favourite </span>'
            );
            done()
        })
        test("Highlight translation in I ate yogurt for breakfast.", (done) => {
            assert.include(
              translator.americanToBritish("I ate yogurt for breakfast"),
              '<span class="highlight"> yoghurt </span>'
            );
            done()
        })
        test("Highlight translation in We watched the footie match for a while.", (done) => {
            assert.include(
              translator.britishToAmerican(
                "We watched the footie match for a while"
              ),
              '<span class="highlight"> soccer </span>'
            );
            done()
        })
        test("Highlight translation in Paracetamol takes up to an hour to work.", (done) => {
            assert.include(
              translator.britishToAmerican(
                "Paracetamol takes up to an hour to work"
              ),
              '<span class="highlight"> Tylenol </span>'
            );
            done()
        })
    })

});
