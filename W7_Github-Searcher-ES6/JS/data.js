class DataModule {

    eventListener(callback) {
        $("#button").on('click', callback);
    }

    fetchUsers(x) {
        console.log('fetching...')
        var input = document.querySelector("#searchField");
        console.log(input);

        return fetch('https://api.github.com/search/users?q=' + input.value)
            .then(function (response) {
                return response.json();

            })
            .then(function (data) {
                x(data);

            });
    }
}

// eksportujes instancu klase

export default DataModule;