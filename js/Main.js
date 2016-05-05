var Pattern = require('./Pattern');
var Word = require('./Word');


/*
 * Main class which is called upon page load.
 */
var Main = function () {
    var pattern = new Pattern('CVC');
    var word = new Word({
        patterns: [
            ['CVC', 50],
            ['VCCV', 21]
        ],
        sounds: {
            'C': [
                ['j', 21],
                ['y', 31],
                ['p', 54]
            ],
            'V': [
                ['a', 21],
                ['e', 23],
                ['i', 34],
                ['o', 12],
                ['u', 23]
            ]
        }
    });

    word.generateRandom();
};

module.exports = Main;


/*
 * On page load, create an instance of class Main.
 */
window.onload = function () {
    new Main();
};
