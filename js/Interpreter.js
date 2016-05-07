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
        console.log(this.split());
        // Split lines
        // Remove spaces
        // Separate sections
        // Separate probabilities
        // Format

        return this.element.value;
    };

    proto_.split = function () {
        return this.element.value.split(/\n/g);
    };


    proto_.removeSpaces = function (array) {

    };

}(Interpreter, Interpreter.prototype));

module.exports = Interpreter;
