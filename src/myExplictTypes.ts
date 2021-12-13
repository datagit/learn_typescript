// explict types
let myName1: string
let myAge1: number

let studdents: string[] = ['nam', 'hung']
studdents.push('lan')

// union
let mixed2 : (string | number | boolean)[]
mixed2 = ['henry', 5, true]
mixed2.push(6)
mixed2.push('lan')
mixed2.push(false)

let id: string | number
id = '123'
id = 123

let hoby: 'book' | 'music'
// hoby = 'nauan'

let person1: object
person1 = {name: 'henry', age: 25}
person1 = []

let student2: {
  name: string,
  age: number,
  isGood: boolean
}

student2 = {
  name: 'henry',
  age: 25,
  isGood: false
}