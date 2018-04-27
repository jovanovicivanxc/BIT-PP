function humanANumb(num) {
    a = num % 100;
    var b = "";
    switch (a) {
        case 1:
        case 21:
        case 31:
        case 41:
        case 51:
        case 61:
        case 71:
        case 81:
        case 91:
            b = num + "st";
            break;
        case 2:
        case 22:
        case 32:
        case 42:
        case 52:
        case 62:
        case 72:
        case 82:
        case 92:
            b = num + "nd";
            break;
        case 3:
        case 23:
        case 33:
        case 43:
        case 53:
        case 63:
        case 73:
        case 83:
        case 93:
            b = num + "rd";
            break;
        default:
            b = num + "th";
            break;
    }
    return b;
}

var c = humanANumb(101);
console.log(c);


// 1   2   3
// 1   21  121
// 1   11  111
// 2   12  112
// 2   22  122