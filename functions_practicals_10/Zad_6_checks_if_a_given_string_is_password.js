function successCallback() {
    return 'Your password is cool'
}

function errorCallback() {
    return 'Your password is invalid'
}

function checks(password, successCallback, errorCallback) {
    var ind = 0;
    var sent;
    if (password.length >= 6) {

        for (i = 0; i < password.length; i++) {
            if (parseInt(password[i]) == password[i]) {
                ind = ind + 1;
            }
        }
        if (ind == 0) {
            sent = errorCallback();
        }
        else {
            sent = successCallback();
        }
    }
    else {
        sent = errorCallback();
    }
    return sent;
}
output = checks("jasa", successCallback, errorCallback)
console.log(output);

