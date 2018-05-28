var genre = require("./genre.js");

function Movie(title, genreParam, length) {
    this.title = title;
    this.genre = new genre.Genre(genreParam);
    this.length = length;
}

Movie.prototype.getData = function () {
    return this.title + ", " + this.length + ", " + this.genre.getData();
}

module.exports = {
    Movie
};