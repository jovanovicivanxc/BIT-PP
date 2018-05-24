var UIModule = (function () {

    var UISelectors = {
        titleSelector: "#title",
        lengthSelector: "#length",
        genreSelector: "#genre",
        errorSelector: "#error",
        currentArraySelector: "#listOfMovies",
        newMovieSelector: "#movie",
        createMovieSelector: "#create-movie-button",
    };
    var status = {
        OK: "OK",
        MISSING_DATA: "Please fill in the form!"
    };
    var title = document.querySelector(UISelectors.titleSelector);
    var length = document.querySelector(UISelectors.lengthSelector);
    var genre = document.querySelector(UISelectors.genreSelector);

    function getFormData() {
        var formData = {};
        formData.title = title.value;
        formData.length = length.value;
        formData.genre = genre.value;

        return formData;
    };
    function validationData(formData) {
        if (formData.title == "" || formData.length == "" || formData.genre == "-") {
            return status.MISSING_DATA;
        }
        return status.OK;
    }

    function setError(message) {
        errorElement.textContent = message;
    }

    function clearError() {
        errorElement.textContent = "";
    }

    function printList() {
        var content = "<ul>";
        for (var i = 0; i < movielist.length; i++) {
            content += '<li>' + movielist[i].getFormData() + '</li>';
        }
        content += "</ul>";
        currentArraySelector.innerHTML = content;
    }

    return {
        UISelectors: UISelectors,
        setError: setError,
        clearError: clearError,
        status: status,
        getFormData: getFormData,
        validationData: validationData,
    };
})();
