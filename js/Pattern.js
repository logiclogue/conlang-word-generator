var Pattern = function (stringPattern) {
    this.stringPattern = stringPattern || '';
    this.sounds = {
        'C': 'jypl',
        'V': 'aeiou'
    };
};

(function (static_, proto_) {

    /*
     * Generates a word based on the pattern.
     */
    proto_.generateWord = function () {
        var word = '';

        for (var i = 0, max = this.stringPattern.length; i < max; i += 1) {
            var sound = this.stringPattern[i];
            var letters = this.sounds[sound];
            var lastLetterIndex = letters.length - 1;
            var letter = Math.round(Math.random() * lastLetterIndex);

            word += this.sounds[sound][letter];
        }

        console.log(word);
    };

}(Pattern, Pattern.prototype));

module.exports = Pattern;
