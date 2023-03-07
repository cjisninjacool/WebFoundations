"use strict";
let joe = {
    firstName: "Joe",
    LastName: "Smith",
    age: 23,
    toString: function () {
        return `${this.firstName} ${this.LastName} is ${this.age} years old and his favorite color is ${this.favColor}`;
    }
};
let maylor = {
    firstName: "maylor",
    LastName: "taylor",
    age: 32,
    phonenumber: "123-456-7890",
    email: "maylor.taylor@mail.com",
    toString: function () {
        return `${this.firstName} ${this.LastName} is ${this.age} years old and her favorite color is ${this.favColor}`;
    },
    printContactDetails: function () {
        return `${this.firstName} can be reached at ${this.phonenumber} or ${this.email}`;
    }
};
console.log(joe.toString());
console.log(maylor.toString());
console.log(maylor.printContactDetails());
