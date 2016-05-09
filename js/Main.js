var Word = require('./Word');
var Elements = require('./Elements');
var Interpreter = require('./Interpreter');


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
                ['u', 23],
                ['汉', 50]
            ]
        }
    });
    this.elements = new Elements();
    this.interpreter = new Interpreter('textarea-input');
    this.input = `CVCE 10
CV 10
VCV 10
VCE 10
CVCVCE 10

(C):
p 10
t 10
k 10
s 10
m 10
n 10
l 10
w 10
j 10

(V):
a 21
e 23
i 34
o 12
u 23

(E):
upom 10
ist 10
ewn 10
`;

    this.elements.get('button-output').addEventListener('click', this.outputClick.bind(this));
    this.elements.get('textarea-input').value = this.input;
    this.outputClick();
};

(function (static_, proto_) {

    /*
     * Method for generating a sentence.
     */
    proto_.generateSentence = function (numberOfWords) {
        var sentence = '';

        while (numberOfWords > 0) {
            sentence += this.word.generateRandom() + '\n';

            numberOfWords -= 1;
        }

        return sentence;
    };

    /*
     * Method which is called when even is added onto
     * the output button.
     */
    proto_.outputClick = function () {
        var numberOfWords = this.elements.get('input-word-number').value;

        this.word.select(this.interpreter.getContent());

        this.elements.get('textarea-output').innerHTML = this.generateSentence(numberOfWords);
    };

}(Main, Main.prototype));

module.exports = Main;


/*
 * On page load, create an instance of class Main.
 */
window.onload = function () {
    new Main();
};
