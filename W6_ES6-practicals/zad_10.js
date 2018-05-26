(() => {
    let input = [3, 11, 1, 9, 5, 6];

    function isBiggerThanZero(elem) {
        if (elem > 0) {
            return true;
        }

        return false;
    }

    var result = input.every(isBiggerThanZero);

    if (result == true) {
        res = "yes";
    }
    else {
        res = "no"
    }
    console.log(res);


})();

