class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
}


class Employee extends Person {
    constructor(name, surname, job, salary) {
        super(name, surname)
        this.job = job;
        this.salary = salary
    }
    getData() {
        console.log(this.name + " " + this.surname + ". Salary is " + this.salary);
    }
}

class Developer extends Employee {
    constructor(name, surname, job, salary, specialization) {
        super(name, surname, job, salary)
        this.specialization = specialization
    }
}

class Manager extends Employee {
    constructor(name, surname, job, salary, department) {
        super(name, surname, job, salary)
        this.department = department
    }
}

let pera = new Employee("Petar", "Petrovic", "1000");
console.log(pera);
pera.getData()

