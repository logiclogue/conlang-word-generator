/*
 * Elements class which selects and saves
 * previously accessed elements.
 */
var Elements = function () {

};

(function (static_, proto_) {

    /*
     * Static property which contains all of the
     * elements that have been accessed before.
     */
    static_.els = {};


    /*
     * Public method which accepts the element name
     * for a parameter and returns the element
     * wanting to be accessed.
     */
    proto_.get = function (elementName) {
        static_.els[elementName] = static_.els[elementName] || document.getElementById(elementName);

        return static_.els[elementName];
    };

}(Elements, Elements.prototype));

module.exports = Elements;
