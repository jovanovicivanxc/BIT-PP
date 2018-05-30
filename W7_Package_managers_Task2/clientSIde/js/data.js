class DataModule {

    fetchData() {
        console.log('fetching...')

        return fetch('http://127.0.0.1:3001')
            .then(function (response) {
                return response.json();
            })
    };

}


export default DataModule;