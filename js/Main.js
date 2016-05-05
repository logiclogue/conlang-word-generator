var Pattern = require('./Pattern');


/*
 * Main class which is called upon page load.
 */
var Main = function () {
    var word = new Word();
    var pattern = new Pattern('CVC');

    pattern.generateWord();
};

module.exports = Main;


/*
 * On page load, create an instance of class Main.
 */
window.onload = function () {
    new Main();
};
