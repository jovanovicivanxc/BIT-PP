var genre = require("./genre.js");
var movie = require("./movie.js");
var program = require("./program.js")

function Festival(name) {
    this.name = name;
    this.list = [];
    this.number = 0;
}
Festival.prototype.addProgram = function (programParam) {
    if (programParam instanceof program.Program) {
        this.list.push(programParam);
    }
    return this.list;
}
Festival.prototype.totalNumber = function (params) {
    var total = 0;
    for (var i = 0; i < this.list.length; i++) {
        var program = this.list[i]
        total += program.list.length;
    }
    return total;
}
Festival.prototype.getData = function (params) {
    var text1 = "";
    for (var i = 0; i < this.list.length; i++) {
        text1 += "\n" + this.list[i].getData();
    }
    return this.name + " has " + this.totalNumber() + " movie titles" + "\n" + text1;
}

var action = new genre.Genre("action");
// console.log(action.getData());


try {

    var terminator = new movie.Movie("Terminator", "Action", 85)
    var betman = new movie.Movie("Betman", "SF", 130)

    var deadpool = new movie.Movie("Deadpool", "Comedy", 95);
    var deadpool2 = new movie.Movie("Deadpool2", "Comedy", 89);

    var program1 = new program.Program("11/06/2018");

    // program1.addMovie(terminator);

    program.Program.prototype.addMovie.apply(program1, [terminator]);

    program1.program.addMovie(betman);

    var program2 = new program.Program("11/07/2018");

    program2.program.addMovie(deadpool);
    program2.program.addMovie(deadpool2);

    if (typeof (terminator.length) != "number" ||
        typeof (betman.length) != "number" ||
        typeof (deadpool.length) != "number" ||
        typeof (deadpool2.length) != "number") {
        throw new TypeError("Type Error: Movie length is not a number!");
    }
    else if (program1.list.length > 4) {
        throw new RangeError("Range Error: Maximum number of movies exceeded!")
    }
    else {
        // console.log(terminator.getData());

        // console.log(program1.addMovie());

        // console.log(program1.getData());
        // console.log(program2.getData());

        var festival1 = new Festival('Cannes');
        festival1.addProgram(program1);
        festival1.addProgram(program2);

        console.log(festival1.getData());

        function createMovie(title, genre, length) {
            return new movie.Movie(title, genre, length)
        }

        //createMovie.call(this, 'Superman', 'Action', 150);
        var superman = createMovie("Superman", "Action", 150);

        function createProgram(date) {
            return new program.Program(date);
        }

        var firstFest = createProgram("05 / 05 / 2018");
        var secondFest = createProgram("06 / 05 / 2018");

    }
} catch (e) {
    if (e instanceof TypeError) {
        console.log(e.message);
    }
    else if (e instanceof RangeError) {
        console.log(e.message);

    }
}

module.exports = {
    Festival
}