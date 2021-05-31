"use strict";
exports.__esModule = true;
exports.Student = void 0;
var Student = /** @class */ (function () {
    function Student(firstName, lastName, middleName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.middleName = middleName;
        this.fullName = firstName + " " + middleName + " " + lastName;
    }
    return Student;
}());
exports.Student = Student;
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = new Student("F1", "L2", "M3");
console.log(greeter(user));
