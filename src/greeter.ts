import { fun2 } from './functions'
import { Student } from './Student'
interface Person {
  firstName: string;
  lastName: string;
}

function greeter(person: Person) {
  return "Hello, " + person;
}

let user = { firstName: "F1", lastName: "L1"};
console.log(greeter(user));

console.log(fun2(1,2));

let user2 = new Student("F1", "L2", "M3");
function greeter2(person: Person) {
  console.log(person);
  return "Hello, " + person.firstName + " " + person.lastName;
}
console.log(greeter2(user2));