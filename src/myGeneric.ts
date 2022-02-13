// generic type T
const lastT = <T>(arr: Array<T>) => {
  return arr[arr.length - 1];
};

console.log(lastT([1,2,3]));
console.log(lastT(['1', '2', '3']));
console.log(lastT<string>(['a', 'b', 'c']));

const makeArrayT = <T>(e: T) => {
  return [e];
};

console.log(makeArrayT<number>(10));
console.log(makeArrayT('abc'));

const makeArrayXY = <X,Y>(x: X, y: Y) => {
  return [x, y];
}

console.log(makeArrayXY<number, number>(11, 22));
console.log(makeArrayXY('11', '22'));

const appendFullname = (obj: {firstName: string; lastName: string}) => {
  return {
    ...obj,
    fullName: `${obj.firstName} ${obj.lastName}`,
  };
}

console.log(appendFullname({ firstName: 'first name1', lastName: 'last name1' }));

const appendFullnameWithExtend = <T extends { firstName: string; lastName: string }>(obj: T) => {
  return {
    ...obj,
    fullName: `${obj.firstName} ${obj.lastName}`,
  };
};

console.log(appendFullnameWithExtend({ firstName: 'dat', lastName: 'dao', age: 30, gender: 'male' }));