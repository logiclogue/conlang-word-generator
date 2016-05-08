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

        // Split instructions
        output = this._split(inputText);
        // Separate ratios
        output = this._separateRatios(output);
        // Separate sections
        output = this._separateSections(output);

        return output;
    };


    /*
     * Splits the input text into processable
     * instructions.
     */
    proto_._split = function (inputText) {
        return inputText.match(/[^\s]+([^\S\n]+[0-9]+)?/g) || [];
    };

    /*
     * Separates ratios and letters.
     */
    proto_._separateRatios = function (inputText) {
        for (var i = 0, max = inputText.length; i < max; i += 1) {
            inputText[i] = inputText[i].split(/\s+/g);

            if (typeof inputText[i][1] !== 'undefined') {
                inputText[i][1] = parseInt(inputText[i][1]);
            }
        }

        return inputText;
    };

    /*
    * Separates sections.
    */
    proto_._separateSections = function (inputText) {
        var breakIndexes = [];
        var output = {
            patterns: [],
            sounds: {}
        };

        inputText.forEach(function (value, index) {
            if (value[0].match(/\(.*\):/g)) {
                breakIndexes.push(index);
            }
            else if (breakIndexes.length === 0) {
                output.patterns.push(value);
            }
        });

        breakIndexes.forEach(function (index, indexArray) {
            var textIndex = inputText[index][0].substring(1, inputText[index][0].length - 2);

            output.sounds[textIndex] = [];

            for (var i = index + 1, max = breakIndexes[indexArray + 1] || inputText.length; i < max; i += 1) {
                output.sounds[textIndex].push(inputText[i]);
            }
        });

        return output;
    };

}(Interpreter, Interpreter.prototype));

module.exports = Interpreter;
