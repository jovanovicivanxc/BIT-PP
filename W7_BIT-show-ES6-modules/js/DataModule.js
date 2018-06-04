class DataModule {

    fetchShows(x) {
        fetch('http://api.tvmaze.com/shows').then(function (response) {
            return response.json();
        }).then(function (data) {
            x(data);
        })
    }

    fetchSearch(y, b) {
        fetch('http://api.tvmaze.com/search/shows?q=' + b).then(function (response) {
            // console.log(data);
            return response.json();

        }).then(function (data) {
            var dataShow = data.splice(0, 10)
            y(dataShow);

        })
    }
}

export default DataModule;