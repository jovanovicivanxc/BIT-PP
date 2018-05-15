function Person(name, surname) {
    this.name = name;
    this.surname = surname;
}

Person.prototype.getFullName = function () {
    return this.name + " " + this.surname;
}

Person.prototype.printInfo = function () {
    console.log(this.getFullName());
}

var p = new Person('Pera', 'Peric');
p.printInfo();

function Employee(name, surname, job, salary) {
    Person.call(this, name, surname);
    this.job = job;
    this.salary = salary;
    this.increaseSalary = function () {
        console.log(this.salary * 1.1);
        return this.salary * 1.1;
    }
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

Employee.prototype.printInfo = function () {

    var employeeFullName;
    employeeFullName = Object.getPrototypeOf(Employee.prototype).getFullName.call(this);
    console.log(employeeFullName + " " + this.job + " " + this.salary);
    return employeeFullName + " " + this.job + " " + this.salary;
}


var em1 = new Employee("Goran", "Nikolic", "developer", 500);
em1.printInfo();
em1.increaseSalary();




function Developer(name, surname, job, salary, specialization) {
    Employee.call(this, name, surname, job, salary);
    this.specialization = specialization;
}
Developer.prototype.getSpecialization = function () {
    console.log(this.specialization);
}

Developer.prototype = Object.create(Employee.prototype);

Developer.prototype.printInfo = function () {

    var developerInfo;
    developerInfo = Object.getPrototypeOf(Developer.prototype).printInfo.call(this);
    console.log(developerInfo + " " + this.specialization);
}

var dev1 = new Developer("Goran", "Nikolic", "developer", 500, "Java");
dev1.printInfo();



function Manager(name, surname, job, salary, department) {
    Employee.call(this, name, surname, job, salary);
    this.department = department;
    this.changeDepartment = function (newDep) {
        console.log(newDep);
        return newDep;
    }
}
Manager.prototype = Object.create(Employee.prototype);

Manager.prototype.printInfo = function () {

    var managerInfo;
    managerInfo = Object.getPrototypeOf(Manager.prototype).printInfo.call(this);
    console.log(managerInfo + " " + this.department);
}

var dev1 = new Developer("Zoran", "Nikolic", "developer", 500, "HR");
// dev1.changeDepartment("PR");
dev1.printInfo();
