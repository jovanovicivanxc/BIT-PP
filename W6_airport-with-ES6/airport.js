'use strict';

(function () {

    function Person(name, surname) {
        this.name = name;
        this.surname = surname;
        this.getData = function (params) {
            return name + " " + surname;
        }
    }

    function Seat(number, category) {



        this.number = (function () {
            let num;
            if (number == undefined) {
                num = parseInt(Math.random() * 100);
            }
            else {
                num = number;
            }
            return num;
        })();

        this.category = (function () {
            let cat = "E";
            if (category == "B") {
                cat = "B"
            }
            else {
                cat = "E"
            }
            return cat;
        })();

        this.getData = function () {
            return this.number + ", " + this.category;
        }
    }



    function Passenger(person, seat) {
        this.person = person;
        this.seat = seat;
        this.getData = function () {
            return seat.number + ', ' + seat.category + ', ' + person.getData();
        }
    }

    function Flight(relation, date, list) {
        this.relation = relation;
        this.date = new Date(date).toDateString();
        this.list = [];
        this.addPassenger = function (passenger) {
            this.list.push(passenger);
            return this.list;
        }
        this.getData = function () {
            let text = "";
            for (let i = 0; i < this.list.length; i++) {
                text += "\n" + this.list[i].getData();
            }
            return this.date + ", " + this.relation + ", " + text;
        }
    }

    function Airport(name, listofFlights) {
        this.name = name;
        this.listofFlights = [];
        this.addFlight = function (flight) {
            this.listofFlights.push(flight);
            return this.listofFlights;
        }
    }


    let pera = new Person("Petar", "Petrovic");
    let zika = new Person("Zivorad", "Zivic");

    // console.log(pera.getData());

    let seat1 = new Seat();
    let seat2 = new Seat();

    // console.log(seat1.category);
    // console.log(seat1.number);
    // console.log(seat1.getData());

    let pass1 = new Passenger(pera, seat1);
    let pass2 = new Passenger(zika, seat2);

    // console.log(pass1.getData());

    let let1 = new Flight("Belgrade-Instabul", "12/10/2018", );
    let1.addPassenger(pass1);
    let1.addPassenger(pass2);

    // console.log(let1.list);

    let aerodrom = new Airport("Nikola Tesla", );
    aerodrom.addFlight(let1);
    console.log(aerodrom.listofFlights);

    // console.log(let1.getData());





    // function createFlight(relation, date) {
    //     return new Flight(relation, date);
    // }

    // var newYork = createFlight('Belgrade-NewYork', '25/10/2018');
    // var barcelona = createFlight('Barcelona-Belgrade', '11/11/2018');

    // function createPassenger(seat, category) {
    //     return new Passenger(seat, category);
    // }

    // var john = createPassenger("1", 'B');
    // var cersei = createPassenger("2", 'B');
    // var daenerys = createPassenger("14", );
    // var tyrion = createPassenger();

    // newYork.addPassenger(john);
    // newYork.addPassenger(cersei);

    // barcelona.addPassenger(daenerys);
    // barcelona.addPassenger(tyrion);

    // var aerodrom = new Airport("Nikola Tesla", );
    // aerodrom.addFlight(newYork);
    // aerodrom.addFlight(barcelona);

    // console.log(barcelona.getData());




})();













