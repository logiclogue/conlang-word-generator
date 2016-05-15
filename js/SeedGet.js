var Elements = require('./Elements');


/*
 * Class that manages the seed checkbox and
 * input.
 */
var SeedGet = function () {
    var elements = new Elements();

    this.checkbox = elements.get('checkbox-is-seed');
    this.input = elements.get('input-seed');

    this.checkbox.addEventListener('click', this._eventCheckbox.bind(this));
};

(function (static_, proto_) {

    /*
     * Method that returns the seed inputted by the
     * user.
     */
    proto_.get = function () {
        if (this.checkbox.checked) {
            return this.input.value;
        }
    };


    /*
     * Method that sets the seed whether the checkbox
     * is checked.
     */
    proto_._eventCheckbox = function () {
        this.input.readOnly = !this.checkbox.checked;
    };

}(SeedGet, SeedGet.prototype));

module.exports = SeedGet;
