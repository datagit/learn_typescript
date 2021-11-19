let fun1: (a: any, b: any) => any = (a, b) => a;

function fun2 (a: any, b: any): any {
  return a + b;
}

const square = (side: number) => side * side
let myGreet: Function
myGreet = () => {
  console.log('myGreeer')
}
myGreet()

const fun1Default = (a: number, b: number = 10): number => {
  return a + b
}

const fun2Default = (a: number, b?: number): number => {
  // fun2Default(10)
  console.log(!!a) // true
  console.log(!!b) // false
  if (!!b) {
    return a + b
  }
  return a
}

console.log('fun2Default:',fun2Default(10))

export {
  fun2,
  square
};