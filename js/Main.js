var Word = require('./Word');
var Elements = require('./Elements');
var Interpreter = require('./Interpreter');
var Examples = require('./Examples');

/*
 * Main class which is called upon page load.
 */
var Main = function () {
    this.word = new Word();
    this.elements = new Elements();
    this.interpreter = new Interpreter('textarea-input');
    this.input = Examples[0];

    this.elements.get('button-output').addEventListener('click', this.outputClick.bind(this));
    this.elements.get('textarea-input').value = this.input;
    this.elements.get('checkbox-is-seed').addEventListener('click', this.eventSeedCheckbox.bind(this));
    this.outputClick();
};

(function (static_, proto_) {

    /*
     * Method for generating a sentence.
     */
    proto_.generateSentence = function (numberOfWords) {
        var sentence = '';

        while (numberOfWords > 0) {
            sentence += this.word.generate() + '\n';

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

    /*
     * Method that switches whether the seed is used.
     * Triggered when pressing the checkbox.
     */
    proto_.eventSeedCheckbox = function (e) {
        if (this.elements.get('checkbox-is-seed').checked) {
            console.log('checked');
            this.elements.get('input-seed').readOnly = false;
        }
        else {
            this.elements.get('input-seed').readOnly = true;
            console.log('unchecked');
        }
    };

}(Main, Main.prototype));

module.exports = Main;


/*
 * On page load, create an instance of class Main.
 */
window.onload = function () {
    new Main();
};
