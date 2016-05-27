var Interpreter = require('./Interpreter');


/*
 * Interpreter class which is used to interpret
 * input from the DOM.
 */
var InterpreterDOM = function () {
    Interpreter.call(this);
};

// Extends Interpreter
InterpreterDOM.prototype = new Interpreter();

(function () {



}(InterpreterDOM, InterpreterDOM.prototype));

module.exports = InterpreterDOM;
