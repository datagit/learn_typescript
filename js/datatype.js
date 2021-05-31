// https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html
// string
// number
// array
// DateTime
// class
function first() {
    let name;
    name = "Hello world";
    console.log(name);
}
first();
function second() {
    let out = "ABC";
    return out;
}
console.log(second());
const user = {
    name: "ABC",
    age: 20,
};
console.log(user);
// class
class UserAccount {
    constructor(n, a) {
        this.name = n;
        this.age = a;
    }
}
const user2 = new UserAccount("Nguyen Van A", 25);
console.log(user2);
let users = [
    {
        name: 'u1',
        age: 10,
    },
    {
        name: 'u2',
        age: 22,
    }
];
let users1;
const u = {
    name: "u1",
    age: 11,
};
//users1.push(u);
const age = 22;
console.log(users.find(u => u.age === age));
let windowState = 'closed';
console.log(windowState);
const oddNumber = 3;
console.log(oddNumber);
function getLength(input) {
    return input.length;
}
console.log(getLength("ABC"));
console.log(getLength(['aaa', 'bbbbbbb']));
function wrapInArray(str) {
    if (typeof str === 'string') {
        return [str];
    }
    return str;
}
console.log(wrapInArray("AAAAA"));
console.log(wrapInArray(["AAAAAa", "bbbbbb", 'x', 'y']));
let stringList = [];
stringList.push("111");
stringList.push("222");
console.log(stringList.length);
stringList.forEach(x => console.log(x));
let objList = [
    { a: 1, b: 2 },
    { a: 21, b: 22 },
];
console.log(objList.length);
objList.forEach(x => console.log(x));
let objList2 = [
    { name: "name1", id: 100 },
    { name: "name2", id: 200 },
    { name: "name3", id: 300 },
];
console.log(objList2.length);
objList2.forEach(x => console.log(x));
//# sourceMappingURL=datatype.js.map