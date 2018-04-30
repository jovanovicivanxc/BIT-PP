function filterOut(s) {
    res = 0;
    for (i = 0; i < s.length; i++) {
        if (isFinite(s[i]) && s[i] / parseInt(s[i]) === 1) {
            res = res + 1;
        }

    }


    return res;
}

var b = filterOut([NaN, 23.1, 15, false, -22.5, '', 4, 7, null]);
console.log(b);