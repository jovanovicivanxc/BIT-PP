function yearsToRet(y, s) {
    var a = 0;
    if (s == "m") {
        a = 65 - (2018 - y);
    }
    else {
        a = 60 - (2018 - y);
    }
    return a
}

console.log(yearsToRet(1990, "m"));

