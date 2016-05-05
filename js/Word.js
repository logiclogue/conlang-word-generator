/*
 * Word class used to generate words from the
 * letters specified.
 */
var Word = function () {
    this.name = 'Words are good';
};

(function (static_, proto_) {

    /*
     *
     */
    proto_.getWords = function () {
        return this.name + ' and this function!';
    };

    /*
     *
     */
    proto_.getWord = function () {

    };
    
}(Word, Word.prototype));

/*
 * Export Word class.
 */
module.exports = Word;
