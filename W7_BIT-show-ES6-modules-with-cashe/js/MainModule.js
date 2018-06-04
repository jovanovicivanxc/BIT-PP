import DataModule from './DataModule.js'
import UIModule from './UIModule.js'

function showReceivedHandler(shows) {
    var u = new UIModule();
    u.displayShows(shows);
}

function run() {
    var d = new DataModule();
    d.fetchShows(showReceivedHandler);
}

function showShows(shows) {
    var u = new UIModule();
    u.displaySearchResults(shows);
}

function eventListener() {
    $("#searchInput").on('keyup', searchBar);
}
function searchBar() {
    var search = $('#searchInput');
    var text = search.val();
    console.log(text);
    var d = new DataModule();
    d.fetchSearch(showShows, text);
}

run();
eventListener();