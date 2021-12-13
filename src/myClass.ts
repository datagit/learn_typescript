// class
export class Employee {
  // public name: string
  // private age: number
  // readonly male: boolean

  // constructor(n: string, a: number, m: boolean) {
  //   this.name = n;
  //   this.age = a;
  //   this.male = m;
  // }

  constructor(
    public name: string,
    private age: number,
    readonly male: boolean
  ){}


  print() {
    return `Name:${this.name}, Age=${this.age}, Male=${this.male}`
  }
}

// const henry = new Employee('henry', 30, true)
// console.log(henry.name);
// // console.log(henry.age);
// console.log(henry.male);

// henry.name = 'nam';
// console.log(henry.name);

// console.log(henry.print());

// const bob = new Employee('Bob', 20, false);
// let employees: Employee[] = [];
// employees.push(henry);
// employees.push(bob);

// employees.forEach(employee => {
//   console.log(employee.print())
// })