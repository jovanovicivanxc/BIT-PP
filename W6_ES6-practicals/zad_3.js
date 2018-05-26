((value = 1) => {
    var a = [4, 6, 11, -9, 2.1];

    const map1 = a.map(x => x + value)
    console.log(map1);

})(5);