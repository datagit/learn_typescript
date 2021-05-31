"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
class Student {
    constructor(firstName, lastName, middleName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.middleName = middleName;
        this.fullName = firstName + " " + middleName + " " + lastName;
    }
}
exports.Student = Student;
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
let user = new Student("F1", "L2", "M3");
console.log(greeter(user));
//# sourceMappingURL=Student.js.map