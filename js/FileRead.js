var fs = require('fs');


var FileRead = function (filename) {
    this.filename = filename;
    this.contents;
};

(function (static_, proto_) {

    /*
     * Method which reads the file.
     */
    proto_.open = function (callback) {
        fs.readFile(this.filename, 'utf8', function (err, contents) {
            this.contents = contents;

            if (callback !== undefined) {
                callback(contents);
            }
        }.bind(this));
    };

}(FileRead, FileRead.prototype));

module.exports = FileRead;
