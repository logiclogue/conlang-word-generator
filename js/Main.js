var Word = require('./Word');
var Elements = require('./Elements');
var Interpreter = require('./Interpreter');
var Examples = require('./Examples');

/*
 * Main class which is called upon page load.
 */
var Main = function () {
    this.word = new Word(undefined, 'Jordan');
    this.elements = new Elements();
    this.interpreter = new Interpreter('textarea-input');
    this.input = Examples[0];

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
        var numberOfWords = this.elements.get('input-word-number').value || 1;

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
