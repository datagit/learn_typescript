// fucntion signature
let greet4: Function
// implement func
greet4 = () => console.log('abc')


let add2: (a: number, b: number) => number
add2 = (a: number, b: number) => {
  return a + b
}

console.log(add2(5,10))