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
        return this.element.innerHTML;
    };

}(Interpreter, Interpreter.prototype));

module.exports = Interpreter;
