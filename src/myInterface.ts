// interface

interface Person {
  name: string,
  age: number,
  speak(lang: string): void
  spend(amount: number): number
}

const henry: Person = {
  name: 'henry',
  age: 30,
  speak(text: string): void {
    console.log(text)
  },
  spend(amount: number): number {
    return amount
  }
}

console.log(henry)

const helloPerson = (person: Person): void => {
  console.log(`hello: ${person.name}`)
}

helloPerson(henry)

export interface WorkingTime {
  startTime: string;
  endTime: string;
  isoWeekday: number | null;
}

export interface WorkingTimeMore extends WorkingTime {
  isoWeekdayString: string;
}
const aWorkingTimeMore: WorkingTimeMore = {
  startTime: '00:00',
  endTime: '24:00',
  isoWeekday: 0,
  isoWeekdayString: 'isoWeekdayString',
};
console.log(aWorkingTimeMore);