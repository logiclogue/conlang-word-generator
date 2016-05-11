var MD5 = require('crypto-js/md5');


/*
 * Class which generates random numbers from a
 * given seed using the MD5 hash algorithm.
 */
var Random = function() {
    this.maximum = 0x100000000;
};

(function (static_, proto_) {

    /*
     * Returns decimal random number.
     */
    proto_.decimal = function (seed) {
        var hash = MD5(seed).toString();
        var subHash = hash.substring(0, 8);
        var intSubHash = parseInt(subHash, 16);
        var decimal = intSubHash / this.maximum;

        return decimal;
    };

}(Random, Random.prototype));

module.exports = Random;
