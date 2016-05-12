var Random = require('./Random');


/*
 * Main class for generating a word.
 * Options are passed it which includes:
 *     patterns
 *     sounds
 */
var Word = function (options, seed) {
    this.select(options);
    this.seed = seed;
    this.random = new Random();
};

(function (static_, proto_) {

    /*
     * Select options.
     */
    proto_.select = function (options) {
        if (typeof options === 'undefined') {
            return false;
        }

        this.patterns = options.patterns;
        this.sounds = options.sounds;

        this._calculateOdds(this.patterns);

        for (var index in this.sounds) {
            this._calculateOdds(this.sounds[index]);
        }
    };

    /*
     * The go to method for generating a word.
     * Generates it randomly.
     */
    proto_.generateRandom = function () {
        if (typeof this.patterns === 'undefined' ||
            typeof this.sounds === 'undefined' ||
            this.patterns.length === 0 ||
            this.sounds.length === 0) {
            return false;
        }

        var soundIndexes = this.random.elementWeight(undefined, this.patterns)[0].split('');
        var word = '';

        soundIndexes.forEach(function (soundIndex) {
            word += this.random.elementWeight(undefined, this.sounds[soundIndex])[0];
        }.bind(this));

        return word;
    };

    /*
     * Generates the same word from a given seed
     * string.
     */
    proto_.generateSeed = function (seed) {

    };


    /*
     * Private method which randomly selects a value
     * from the array based on odds calculated.
     */
    proto_._randomChoose = function (data, randomVal) {
        var chosenValue;
        randomVal = randomVal || this.random.decimal(Math.random());

        for (var i = 0, max = data.length; i < max; i += 1) {
            chosenValue = data[i];

            if (chosenValue[2] > randomVal) {
                break;
            }
        }

        return chosenValue;
    };

    /*
     * Private method that calculates the odds for
     * each array and appends the odds to it.
     */
    proto_._calculateOdds = function (data) {
        var oddsSum = 0;
        var currentOdds = 0;

        data.forEach(function (val) {
            oddsSum += val[1];
        });

        data.forEach(function (val) {
            currentOdds += val[1] / oddsSum;

            val.push(currentOdds);
        });
    };

}(Word, Word.prototype));

module.exports = Word;
