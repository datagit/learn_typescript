import { fun2, square } from './functions'
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
//object
const makeFullName = (obj: {
  firstName: string,
  lastName: string,
}) => {
  console.log('run')
  return {
    ...obj,
    fullName: `${obj.firstName} ${obj.lastName}`
  }
}

// my comment
const n1 = makeFullName({firstName: 'Dat2', lastName: 'Dao'})
console.log(n1)

console.log(square(123))
