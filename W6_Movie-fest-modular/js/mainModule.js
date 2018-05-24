var mainModule = (function (UIModule, dataModule) {

    function addCreateMovieButtonListener() {

        //dohvatiti dugmence
        var createMovieButton = document.querySelector(UIModule.UISelectors.createMovieSelector);

        //definisati listener        
        createMovieButton.addEventListener('click', function () {
            //procitati podatke

            UIModule.printList();
            

        });
    }
})();