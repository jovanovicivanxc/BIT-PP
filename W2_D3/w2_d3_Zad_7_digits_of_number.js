var a = -145566;

for (i = 1; i < 1000; i++) {
    if (a > -10 && a < 10) {
        console.log(i);
        break;
    }
    else {
        a = a / 10;
    }

}