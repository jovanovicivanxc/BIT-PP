var movie = require("./movie.js");

function Program(date) {
    this.date = new Date(date);
    this.list = [];
    this.number = 0;
}

Program.prototype.addMovie = function (movieParam) {
    if (movie instanceof movie.Movie) {
        this.list.push(movieParam);
    }
    return this.list;
}
Program.prototype.getData = function () {
    var text = "";
    for (var i = 0; i < this.list.length; i++) {
        var text = text + this.list[i].title + ', ' + this.list[i].length + ', ' + this.list[i].genre.getData() + "\n";
    }

    var dateString = this.date.getDate() + "." + this.date.getMonth() + "." + this.date.getFullYear();
    return dateString + ', ' + this.totalLength() + "min" + "\n" + text;
}
Program.prototype.totalLength = function (params) {
    var total = 0;
    for (var i = 0; i < this.list.length; i++) {
        total += this.list[i].length;
    }
    return total;
}

module.exports = {
    Program
};