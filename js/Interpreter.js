var Elements = require('./Elements');


/*
 * Class which interprets text and converts it to
 * a format which can be read by the word class.
 */
var Interpreter = function (elementId) {
    var elements = new Elements();

    this.element = elements.get(elementId);
};

(function (static_, proto_) {

    /*
     * Method which returns the raw content of the
     * element.
     */
    proto_.getContent = function () {
        var inputText = this.element.value;
        var output;
        var lines;

        // Split instructions
        lines = this._split(inputText);
        // Separate probabilities
        //lines = this._removeSpaces(lines);
        // Separate sections
        // Format

        output = lines;

        console.log(output);

        return output;
    };


    /*
     * Splits the input text into processable
     * instructions.
     */
    proto_._split = function (inputText) {
        return inputText.match(/[^\s]+([^\S\n]+[0-9]+)?/g) || [];
    };

}(Interpreter, Interpreter.prototype));

module.exports = Interpreter;
