var dataModule = (function () {

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
            this.number++;
        }
        return this.list;
    }

    Program.prototype.totalLength = function () {
        var total = 0;
        for (var i = 0; i < this.list.length; i++) {
            total += this.list[i].length;
        }
        return total;
    }

    Program.prototype.getData = function () {
        var text = "";
        if (this.list.length != 0) {
            // for (var i = 0; i < this.list.length; i++) {
            //     var text = text + this.list[i].title + ', ' + this.list[i].length + ', ' + this.list[i].genre.getData() + "\n";
            // }
            var dateString = this.date.getDate() + "." + this.date.getMonth() + "." + this.date.getFullYear();
            return dateString + ', duration: ' + this.totalLength() + "min, " + this.number + " movies";
        }
        else {
            return this.date.toDateString() + " program duration: TBA";
        }
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


    var movieList = [];


    return {
        createMovie: function (title, genre, length) {
            var movie = Movie(title, genre, length)
            movieList.push(movie);

        },

        movieListToStringsList: function () {
            //
        }
    }

})();