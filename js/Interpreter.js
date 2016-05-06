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

        return this.element.value;
    };

    proto_.split = function () {
        return this.element.value.split(/\n/g);
    };

}(Interpreter, Interpreter.prototype));

module.exports = Interpreter;
