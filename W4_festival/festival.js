'use strict';

(function () {

    function Genre(name) {
        this.name = name;
    }

    Genre.prototype.getData = function () {
        var firstLetter = this.name[0].toUpperCase();
        var lastLetter = this.name.charAt(this.name.length - 1).toUpperCase();
        return firstLetter + lastLetter;
    }

    function Movie(title, genre, length) {
        this.title = title;
        this.genre = new Genre(genre);
        this.length = length;
    }

    Movie.prototype.getData = function () {
        return this.title + ", " + this.length + ", " + this.genre.getData();
    }

    function Program(date) {
        this.date = new Date(date);
        this.list = [];
        this.number = 0;
    }

    Program.prototype.addMovie = function (movie) {
        if (movie instanceof Movie) {
            this.list.push(movie);
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

    function Festival(name) {
        this.name = name;
        this.list = [];
        this.number = 0;
    }
    Festival.prototype.addProgram = function (program) {
        if (program instanceof Program) {
            this.list.push(program);
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


    var action = new Genre("action");
    // console.log(action.getData());


    try {

        var terminator = new Movie("Terminator", "Action", 85)
        var betman = new Movie("Betman", "SF", 130)

        var deadpool = new Movie("Deadpool", "Comedy", 95);
        var deadpool2 = new Movie("Deadpool2", "Comedy", 89);

        var program1 = new Program("11/06/2018");

        //program1.addMovie(terminator);

        Program.prototype.addMovie.apply(program1, [terminator]);

        program1.addMovie(betman);

        var program2 = new Program("11/07/2018");

        program2.addMovie(deadpool);
        program2.addMovie(deadpool2);

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
                return new Movie(title, genre, length)
            }

            //createMovie.call(this, 'Superman', 'Action', 150);
            var superman = createMovie("Superman", "Action", 150);

            function createProgram(date) {
                return new Program(date);
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




})();