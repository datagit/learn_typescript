"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var functions_1 = require("./functions");
var Student_1 = require("./Student");
function greeter(person) {
    return "Hello, " + person;
}
var user = { firstName: "F1", lastName: "L1" };
console.log(greeter(user));
console.log(functions_1.fun2(1, 2));
var user2 = new Student_1.Student("F1", "L2", "M3");
function greeter2(person) {
    console.log(person);
    return "Hello, " + person.firstName + " " + person.lastName;
}
console.log(greeter2(user2));
//object
var makeFullName = function (obj) {
    console.log('run');
    return __assign(__assign({}, obj), { fullName: obj.firstName + " " + obj.lastName });
};
// my comment
var n1 = makeFullName({ firstName: 'Dat1', lastName: 'Dao' });
console.log(n1);
