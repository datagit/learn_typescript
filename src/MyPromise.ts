// // define
// const one = new Promise<string>((resolve, reject) => {
//   resolve('Hello')
//   // reject(new Error('reject failed'));
// });

// // call
// one.then(value => { console.log('resolved', value) });
// one.catch(error => { console.log('rejected', error) })
const one = new Promise<string>((resolve, reject) => {
  // resolve('Hello');
  // resolve with this.num*2 after the 1 second
  setTimeout(() => resolve('Hello'), 1000); // (**)
});
console.log('the start');
const two = one.then(value => {
  return 123;
});
console.log('var two=', two);
two.then(value => {
  console.log('value of variable two=', value);
});
two.catch(error => {
  console.log('Oops', error);
});
console.log('the end');