var Word = require('./Word');
var Elements = require('./Elements');


/*
 * Main class which is called upon page load.
 */
var Main = function () {
    this.word = new Word({
        patterns: [
            ['CVC', 10],
            ['CV', 10],
            ['CVV', 10],
            ['VCV', 10],
            ['VC', 10],
            ['CVCCVC', 10],
            ['CVCVC', 10],
            ['CVCCV', 10],
            ['C', 10]
        ],
        sounds: {
            'C': [
                ['p', 100],
                ['t', 100],
                ['k', 100],
                ['s', 100],
                ['m', 100],
                ['n', 100],
                ['l', 100],
                ['w', 100],
                ['j', 100]
            ],
            'V': [
                ['a', 21],
                ['e', 23],
                ['i', 34],
                ['o', 12],
                ['u', 23]
            ]
        }
    });
    this.elements = new Elements();

    this.outputClick();
    this.elements.get('button-output').addEventListener('click', this.outputClick.bind(this));
};

(function (static_, proto_) {

    /*
     * Method for generating a sentence.
     */
    proto_.generateSentence = function (numberOfWords) {
        var sentence = '';

        while (numberOfWords > 0) {
            sentence += this.word.generateRandom() + ' ';

            numberOfWords -= 1;
        }

        return sentence;
    };

    /*
     * Method which is called when even is added onto
     * the output button.
     */
     proto_.outputClick = function () {
         this.elements.get('code-output').innerHTML = this.generateSentence(10);
     };

}(Main, Main.prototype));

module.exports = Main;


/*
 * On page load, create an instance of class Main.
 */
window.onload = function () {
    new Main();
};
