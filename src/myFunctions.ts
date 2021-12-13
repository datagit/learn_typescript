// FUNCTIONS

const square = (side: number) => side * side
console.log(square(2))

let greetFunc: Function

// greetFunc = 10
// greetFunc = 'abc'
// greetFunc = true
// greetFunc = {}
greetFunc = () => console.log('hello')
greetFunc()

// const add = (a: number, b: number, c?: number | string) => {
//   console.log('a+b', a + b);
//   console.log('c', c);
//   if (!!c) {
//     console.log('!!c', c);
//   }
// }
// console.log(add(1,2,'a'));
// console.log(add(1,2,3));
// console.log(add(1,2));

// const addDefault = (a: number, b: number, c: number | string = 10) => {
//   console.log('a+b', a + b);
//   console.log('c', c);
// }

// console.log(addDefault(10,20,30));
// console.log(addDefault(10,20));

const mimus = (a: number, b: number): number => a - b
console.log(mimus(10, 5));