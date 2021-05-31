"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions_1 = require("./functions");
const Student_1 = require("./Student");
function greeter(person) {
    return "Hello, " + person;
}
let user = { firstName: "F1", lastName: "L1" };
console.log(greeter(user));
console.log(functions_1.fun2(1, 2));
let user2 = new Student_1.Student("F1", "L2", "M3");
function greeter2(person) {
    console.log(person);
    return "Hello, " + person.firstName + " " + person.lastName;
}
console.log(greeter2(user2));
//# sourceMappingURL=greeter.js.map