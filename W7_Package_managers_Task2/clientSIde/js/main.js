import DataModule from './data.js'
import UIModule from './ui.js'

function showReceivedHandler(blogs) {
    var u = new UIModule();
    u.displayData(blogs);
}

function run() {
    var d = new DataModule();
    d.fetchData().then(showReceivedHandler);
}


run();
