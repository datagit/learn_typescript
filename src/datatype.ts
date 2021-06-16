// https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html
// string
// number
// array
// DateTime
// class
function first(): void {
  let name: string;
  name = "Hello world";
  console.log(name);
}
first();

function second(): string {
  let out: string = "ABC";
  return out;
}
console.log(second());

interface User {
  name: string,
  age: number,
}

const user: User = {
  name: "ABC",
  age: 20,
}
console.log(user);

// class
class UserAccount {
  name: string;
  age: number;
  constructor(n: string, a: number) {
    this.name = n;
    this.age = a;
  }
}
const user2: User = new UserAccount("Nguyen Van A", 25);
console.log(user2);

let users: User[] = [
  {
    name: 'u1',
    age: 10,
  },
  {
    name: 'u2',
    age: 22,
  }
];

let users1: User[];
const u: User = {
  name: "u1",
  age: 11,
};
//users1.push(u);

const age: number = 22;
console.log(users.find(u => u.age === age));

//Composing Types
type WindowStates = 'open' | 'closed' | 'minimized';
type LockStates = "locked" | "unlocked";
type OddNumbersUnderTen = 1 | 3 | 5 | 7 | 9;

let windowState: WindowStates = 'closed';
console.log(windowState);

const oddNumber: OddNumbersUnderTen = 3;
console.log(oddNumber);

function getLength(input: string | string[]): number {
  return input.length;
}

console.log(getLength("ABC"));
console.log(getLength(['aaa', 'bbbbbbb']));

function wrapInArray(str: string | string[]): string[] {
  if (typeof str === 'string') {
    return [str];
  }
  return str;
}

console.log(wrapInArray("AAAAA"));
console.log(wrapInArray(["AAAAAa", "bbbbbb", 'x', 'y']));

// generic
type StringArray = Array<string>;
let stringList: StringArray = [];
stringList.push("111");
stringList.push("222");
console.log(stringList.length);
stringList.forEach(x => console.log(x));

// object array
type ObjectArray = Array<object>;
let objList: ObjectArray = [
  {a: 1, b:2},
  {a: 21, b:22},
]

console.log(objList.length);
objList.forEach(x => console.log(x));

// objectNameIdList
type ObjectNameIdList = Array<{name: string, id: number}>;
let objList2: ObjectNameIdList = [
  {name: "name1", id: 100},
  {name: "name2", id: 200},
  {name: "name3", id: 300},
];
console.log(objList2.length);
objList2.forEach(x => console.log(x));

function funcDefaultValue(s: string = "DDDD"): string{
  return s;
}

console.log(funcDefaultValue());
console.log(funcDefaultValue("ABC"));