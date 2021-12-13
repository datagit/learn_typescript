// optional and non null
const add3 = (a: number, b?: number) => (b ? a + b : a)
const add4 = (a: number, b?: number) => a + b
const add5 = (a: number, b?: number) => a + b!

console.log(add4(1,2))
console.log(add4(1))
console.log(add5(10))