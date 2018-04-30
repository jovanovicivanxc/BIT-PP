function filterOut(s) {
    res = [];
    for (i = 0, j = 0; i < s.length; i++) {
        if (isFinite(s[i]) && s[i] != null && s[i] != false) {
            res[j] = s[i];
            j++;
        }

    }


    return res;
}

var b = filterOut([NaN, 0, 15, false, -22, '', undefined, 47, null]);
console.log(b);