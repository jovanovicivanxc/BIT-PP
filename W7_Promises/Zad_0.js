var promise = new Promise((resolve, reject) => {
    var time = new Date();
    resolve(time);
})

promise.then(function (vreme) {
    console.log(vreme);
    return "done";

}).then(function (message) {
    console.log(message);
});