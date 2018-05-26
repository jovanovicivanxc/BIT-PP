(() => {
    function Person(name, age) {
        this.name = name;
        this.age = age
    };
    var pera = new Person("Petar", 15);
    var zika = new Person("Zivorad", 28);
    var marko = new Person("Marko", 45);

    var a = [pera, zika, marko];

    let resultB = a.filter(a => a.age > 25);
    resultB.forEach(function (element) {
        console.log(element.name);

    });

    let resultC = a.some(a => a.age > 40);
    console.log(resultC);

    let resultD = a.every(a => a.age > 20);
    console.log(resultD);

})();

