function joinElem(s) {
    res = "";
    for (i = 0; i < s.length; i++) {
        if (isFinite(s[i]) && s[i] != null && s[i] !== false) {
            res = res + s[i];
        }

    }


    return res;
}

var b = joinElem([NaN, 0, 15, false, -22, '', undefined, 47, null]);
console.log(b);