"use strict";
class employee {
    constructor(name, title, department, salary) {
        this.name = name;
        this.title = title;
        this.department = department;
        this.salary = salary;
    }
    printSalary() {
        return "$" + this.salary;
    }
    printDetails() {
        return this.name + " is a " + this.title + " in the " + this.department + " with a salary of $" + this.salary;
    }
}
class Manager extends employee {
    constructor(name, title, department, salary, teamsize = 1, managerBonus = 1500) {
        super(name, title, department, salary);
        this.teamsize = teamsize;
        this.managerBonus = managerBonus;
    }
    printSalary() {
        return "$" + String(this.salary + this.managerBonus);
    }
    printDetails() {
        return super.printDetails() + `
` + this.name + " manages " + this.teamsize + " employee(s)";
    }
}
let eric = new employee("Eric", "Junior developer", "Software department", 60000);
let Jamie = new Manager("Jamie", "Senior Developer", "Software department", 101500);
console.log(eric.printDetails());
console.log(Jamie.printDetails());
