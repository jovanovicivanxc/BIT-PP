class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    printPersonData() {
        console.log(this.name + " " + this.surname);
    }
}

class Programmer {
    constructor(name, surname, language) {
        this.name = name;
        this.surname = surname;
        this.language = language;

    }
    printProgrammerData() {
        console.log(this.name + " " + this.surname + ". " + this.language);
    }
    learnedNewLanguage() {
        this.language.push(newLanguage);
    }
}

var pera = new Person("Petar", "Petrovic");
console.log(pera);
pera.printPersonData();

var zika = new Programmer("Zika", "Zikic", "C#");
console.log(zika);
zika.printProgrammerData();

