class Student {
  fullName: string;
  constructor(
    public firstName: string,
    public lastName: string,
    public middleName: string
  ) {
    this.fullName = firstName + " " + middleName + " " + lastName;
  }
}

interface Person {
  firstName: string;
  lastName: string;
}

function greeter(person: Person) {
  return "Hello, " + person.firstName + " " + person.lastName;
}

let user = new Student("F1", "L2", "M3");
console.log(greeter(user));

export {Student};

