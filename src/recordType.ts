// version 1;
type studentScore= { [name: string]: number };

const v1: studentScore = { myCore: 100, age: 30 };
console.log({ v1 });

// version 2;
type StudentScore2 = Record<string, number>;
const v2: StudentScore2 = { myCore: 100, age: 30 };
console.log({ v2 });

// version 3;
type roles = 'tester' | 'developer' | 'manager';
const staffCount:Record<roles,number> = {
  tester: 10,
  developer: 20,
  manager: 30,
};
console.log(staffCount.developer);
console.log({ staffCount });