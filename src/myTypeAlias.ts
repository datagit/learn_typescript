// type alias

type StringOrNUmber = string | number
type Student = {
  name: string
  id: StringOrNUmber
}

const studentDetail = (id: StringOrNUmber, studentName: string): void => {
  console.log(`Student id=${id} with name ${studentName}`)
}

studentDetail(123, 'Dat')

const greet3 = (user: Student): void => {
  console.log(`Student id=${user.id} and name=${user.name}`)
}

greet3({id: 123, name: 'dat dao'})
