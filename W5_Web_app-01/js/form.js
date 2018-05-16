
var arrayOfMovies = [];

document.querySelector("#create-movie-button").addEventListener('click', function () {

    var titleElement = document.querySelector('#title');
    var lengthElement = document.querySelector('#length');
    var genreElement = document.querySelector('#genre');
    var errorElement = document.querySelector('#error');
    var currentArrayElement = document.querySelector('#listOfMovies')

    // citanje unete vrednosti
    var title = titleElement.value;
    var length = lengthElement.value;
    var genre = genreElement.value;

    if (title != "" && length != "" && genre != "empty") {

        errorElement.textContent = "";

        var movie = new Movie(title, length, genre);

        // ako je sve ok, dodati broj u niz
        arrayOfMovies.push(movie);

        var content = "";
        for (var i = 0; i < arrayOfMovies.length; i++) {
            content += arrayOfMovies[i].getData();
            content += "<br>";
        }

        currentArrayElement.innerHTML = content;

        titleElement.value = '';
        lengthElement.value = '';
        genreElement.value = '';
    }
    else {
        errorElement.textContent = 'Please, fill all fields.';




    }
});


var arrayOfPrograms = [];

document.querySelector("#create-program-button").addEventListener('click', function () {

    var dateElement = document.querySelector('#date');
    var currentArrayElementMovies = document.querySelector('#listOfDays')

    var date = dateElement.value;

    var program = new Program(date);

    arrayOfPrograms.push(program);

    var content = "";
    for (var i = 0; i < arrayOfPrograms.length; i++) {
        content += arrayOfPrograms[i].getData();
        content += "<br>";
    }

    currentArrayElementMovies.innerHTML = content;

});


document.querySelector("#add-movie-to-program-button").addEventListener('click', function () {




});

