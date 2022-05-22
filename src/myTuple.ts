// tuple
const tuple: [string, boolean, number] = ['henry', true, 20]
console.log(tuple)
console.log(tuple[0])

type keys = 'color' | 'name';
type Shape = {
  [key in keys]: string;
}
const circle: Shape = {
  name: 'circle',
  color: 'red',
}