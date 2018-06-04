import DataModule from './data.js'
import UIModule from './ui.js'

function showReceivedHandler(users) {
    var u = new UIModule();
    u.displayUsers(users);
}

function run() {
    var d = new DataModule();
    d.fetchUsers(showReceivedHandler);
}

var d = new DataModule();
d.eventListener(run);