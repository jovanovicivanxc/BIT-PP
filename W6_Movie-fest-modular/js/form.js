
var arrayOfMovies = [];

document.querySelector("#create-movie-button").addEventListener('click', function () {

    var titleElement = document.querySelector('#title');
    var lengthElement = document.querySelector('#length');
    var genreElement = document.querySelector('#genre');
    var errorElement = document.querySelector('#error');
    var currentArrayElement = document.querySelector('#listOfMovies')
    var newMovie = document.querySelector('#movie')

    // citanje unete vrednosti
    var title = titleElement.value;
    var length = parseInt(lengthElement.value);
    var genre = genreElement.value;

    if (title != "" && length != "" && genre != "empty") {

        errorElement.textContent = "";

        var movie = new Movie(title, genre, length);

        // ako je sve ok, dodati broj u niz
        arrayOfMovies.push(movie);

        var content = "<ul>";
        for (var i = 0; i < arrayOfMovies.length; i++) {
            content += '<li>' + arrayOfMovies[i].getData() + '</li>';
        }
        content += "</ul>";

        currentArrayElement.innerHTML = content;

        titleElement.value = '';
        lengthElement.value = '';
        genreElement.value = '';

        newMovie.innerHTML = newMovie.innerHTML + "<option>" + movie.getData() + "</option>";
    }
    else {
        errorElement.textContent = 'Please, fill all fields.';
    }
});


var arrayOfPrograms = [];

document.querySelector("#create-program-button").addEventListener('click', function () {

    var dateElement = document.querySelector('#date');
    var currentArrayElementMovies = document.querySelector('#listOfDays');
    var newProgram = document.querySelector('#program');

    var date = dateElement.value;

    var program = new Program(date);

    arrayOfPrograms.push(program);

    var content = "<ul>";
    for (var i = 0; i < arrayOfPrograms.length; i++) {
        content += '<li>' + arrayOfPrograms[i].getData() + '</li>';
        content += "</ul>";
    }

    currentArrayElementMovies.innerHTML = content;

    newProgram.innerHTML = newProgram.innerHTML + "<option>" + program.getData() + "</option>";

});

var programList = [];
var movie;
var program;
document.querySelector("#add-movie-to-program-button").addEventListener('click', function () {
    var movieElement = document.querySelector('#movie');
    var programElement = document.querySelector('#program');
    var currentArrayElementMovies = document.querySelector('#listOfDays');



    for (var i = 0; i < arrayOfMovies.length; i++) {
        if (arrayOfMovies[i].getData() == movieElement.value) {
            movie = arrayOfMovies[i];
        }
    }
    // alert(arrayOfMovies[indMovie].getData());

    for (var j = 0; j < arrayOfPrograms.length; j++) {
        if (arrayOfPrograms[j].getData() == programElement.value) {
            program = arrayOfPrograms[j];
        }
    }

    program.addMovie(movie);

    var content = "<ul>";
    for (var i = 0; i < arrayOfPrograms.length; i++) {
        content += '<li>' + arrayOfPrograms[i].getData() + '</li>';

    }
    content += "</ul>";

    currentArrayElementMovies.innerHTML = content;

});

