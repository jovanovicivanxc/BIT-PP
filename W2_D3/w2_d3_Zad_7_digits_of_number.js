var a = 456;

for (i = 1; i < 100; i++) {
    if (a > -10 && a < 10) {
        console.log(i);
        break;
    }
    else {
        a = a / 10;
    }

}