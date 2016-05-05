var Word = function () {
    this.name = 'Words are good';
};


module.exports = (function (class_, public_) {
    public_.getWords = function () {
        return this.name + ' and this function!';
    };


    return class_;
}(Word, Word.prototype));
