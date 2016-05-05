var Word = require('./Word');
var Pattern = require('./Pattern');


window.onload = function () {
    var word = new Word();
    var pattern = new Pattern('CVC');

    pattern.generateWord();
};
