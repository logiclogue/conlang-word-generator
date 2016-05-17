var MD5 = require('crypto-js/md5');


/*
 * Class which generates random numbers from a
 * given seed using the MD5 hash algorithm.
 * Requires crypto-js.
 */
var Random = function () {
    this.maximum = 0x100000000;
};

(function (static_, proto_) {

    /*
     * Returns decimal random number.
     */
    proto_.decimal = function (seed) {
        var hash = MD5(seed + '').toString();
        var subHash = hash.substring(0, 8);
        var intSubHash = parseInt(subHash, 16);
        var decimal = intSubHash / this.maximum;

        return decimal;
    };

    /*
     * Returns random number within range.
     */
    proto_.range = function (seed, min, max) {
        var decimal = this.decimal(seed + '' + min + '' + max);
        var number = Math.floor(decimal * (max + 1));
    
        return number;
    };

    /*
     * Returns random element of given array.
     */
    proto_.element = function (seed, array) {
        var min = 0;
        var max = array.length - 1;
        var index = this.range(seed, min, max);
        var element = array[index];

        return element;
    };

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

}(Random, Random.prototype));

module.exports = Random;
