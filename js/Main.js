var Word = require('./Word');


window.onload = function () {
    var word = new Word();

    console.log(word.name);
    console.log(word.getWords());
};
