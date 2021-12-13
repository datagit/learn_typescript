// module
import { Employee } from './myClass'

const dat = new Employee('dat', 33, true)
console.log(dat.print())

const henry = new Employee('henry', 30, true)
console.log(henry.name);
// console.log(henry.age);
console.log(henry.male);

henry.name = 'nam';
console.log(henry.name);

console.log(henry.print());

const bob = new Employee('Bob', 20, false);
let employees: Employee[] = [];
employees.push(henry);
employees.push(bob);

employees.forEach(employee => {
  console.log(employee.print())
})