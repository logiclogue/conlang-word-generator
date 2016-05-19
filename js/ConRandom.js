var Random = require('./Random');


/*
 * Class that extends Random for more
 * methods related to the word generator.
 */
var ConRandom = function () {
    // Extends Random.
    Random.call(this);
};

// Extends Random.
ConRandom.prototype = new Random();

(function (static_, proto_) {

    /*
     * Returns random element of given array, each
     * element is weighted in the format:
     * [value, weight]
     */
    proto_.elementWeight = function (seed, array) {
        var randomVal = this.decimal(seed || Math.random());
        var chosenValue;

        for (var i = 0, max = array.length; i < max; i += 1) {
            chosenValue = array[i];

            if (chosenValue[2] > randomVal) {
                break;
            }
        }

        return chosenValue;
    };

}(ConRandom, ConRandom.prototype));

module.exports = ConRandom;
