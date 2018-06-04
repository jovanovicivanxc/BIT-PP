class DataModule {

    fetchShows(x) {
        if (!localStorage.getItem('key')) {
            fetch('http://api.tvmaze.com/shows', { cache: "force-cache" }).then(function (response) {
                return response.json();
            }).then(function (data) {
                x(data);
                return data;
            }).then(function (data) {
                localStorage.setItem('key', JSON.stringify(data))
            });
        }
        else {
            x(JSON.parse(localStorage.getItem('key')))

        }
    }
    fetchSearch(y, b) {
        fetch('http://api.tvmaze.com/search/shows?q=' + b).then(function (response) {
            return response.json();

        }).then(function (data) {
            var dataShow = data.splice(0, 10)
            y(dataShow);

        })
    }
}

export default DataModule;