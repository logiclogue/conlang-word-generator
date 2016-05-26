var Interpreter = require('./Interpreter');


var InterpreterDOM = function () {
    Interpreter.call(this);
};

InterpreterDOM.prototype = new Interpreter();

(function () {



}(InterpreterDOM, InterpreterDOM.prototype));

module.exports = InterpreterDOM;
