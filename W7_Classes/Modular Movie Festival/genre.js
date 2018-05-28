
function Genre(name) {
    this.name = name;
}

Genre.prototype.getData = function () {
    var firstLetter = this.name[0].toUpperCase();
    var lastLetter = this.name.charAt(this.name.length - 1).toUpperCase();
    return firstLetter + lastLetter;
}

module.exports = {
    Genre
};