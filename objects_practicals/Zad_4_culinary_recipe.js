function Recipe(name, cuisine, complexity, ingredients, time, instruction) {
    this.ime = name;
    this.kuhinja = cuisine;
    this.slozenost = complexity;
    this.sastojci = ingredients;
    this.vreme = time;
    this.uputstvo = instruction;
    this.necessaryIngredients = function () {
        return "Potrebni sastojci su " + this.sastojci
    }
    this.lessThan15 = function () {
        if (this.vreme < 15) {
            return "Potrebno je manje od 15min"
        }
        else return "Potrebno je vise od 15min"
    }
    this.typeOfCuisine = function () {
        if (this.kuhinja == "francuska") {
            return "Ispravan naziv kuhinje"
        }
        else return "Pogresan naziv kuhinje"
    }
    this.deleteIngredient = function (s) {
        for (i = 0; i < this.sastojci.length; i++) {
            if (s == this.sastojci[i]) {
                delete this.sastojci[i];
            }
        }
    }

}

var r = new Recipe("przenice", "francuska", 3, ['hleb', 'jaja', 'ulje', 'mleko'], 10, "....");

console.log(r.necessaryIngredients());

console.log(r.lessThan15());

console.log(r.typeOfCuisine());

console.log(r.deleteIngredient("mleko"));

console.log(r);
