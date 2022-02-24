import { Invoice, Payment } from './myClassImplementInterface';
import { HasPrint } from './myInterfaceForClass';

const doc1: HasPrint = new Invoice('Vinamilk', 'drink milk', 1000)
const doc2: HasPrint = new Payment('vian game', 'play game', 5000)

const docs: HasPrint[] = [];

docs.push(doc1)
docs.push(doc2)
console.log(docs)

// generics: https://www.youtube.com/watch?v=NS1wJBsQ9SM&list=PLKzNGvIJtUDbQk3RDWTbyo2FkezJYf0q1&index=4
type stringArray = Array<string>
type numberArray = Array<number>

const last = (arr: Array<number>) => arr[arr.length - 1]
const l1 = last([1, 2, 3])
console.log(l1)

// const l2 = last(['a', 'b', 'c'])
// console.log(l2)

const lastT = <T>(arr: Array<T>) => arr[arr.length - 1]
const l3 = lastT([1, 2, 3, 4])
console.log(l3)

const l4 = lastT(['a', 'b', 'c'])
console.log(l4)

const l5 = lastT<string>(['a1', 'b1'])
console.log(l5)
//-----------------
const makeArray = (x: number) => [x]
const makeArrayT = <T>(x: T) => [x]

const m3 = makeArrayT(10)
const m4 = makeArrayT<string>('dat')

const makeFullName = (obj: { firstName: string, lastName: string }) => {
  return {
    ...obj,
    fullName: `${obj.firstName} ${obj.lastName}`
  }
}

const m5 = makeFullName({firstName: 'Dat', lastName: 'Dao'})
console.log(m5)

// Generics interface

interface Resource<T> {
  uid: number,
  name: string,
  data: T
}

type NumberResource = Resource<number[]>

const resourceOne: Resource<string> = {
  uid: 1,
  name: 'Dat Dao',
  data: 'my data'
}

const resourceTwo: Resource<number> = {
  uid: 1,
  name: 'Dat Dao',
  data: 100
}

const resourceThere: Resource<number[]> = {
  uid: 1,
  name: 'Dat Dao',
  data: [100, 200]
}

const x: NumberResource = {
  uid: 100,
  name: 'Dat000 Dao',
  data: [200, 400]
}

const abc = {};
// try {
//   throw new Error('my error');
// } catch (error) {
//   //throw new Error((error as Error).message.toString());
//   throw error as Error;
// }



const myFunc = async (role: string): Promise<Array<Record<string, any>>> => {
  return [{a:1, b:2}];
}

async function myAAA() {
  console.log(await myFunc("abc"));
}
myAAA();
