Promise.all([
  new Promise(resolve => {
    console.log(new Date().toUTCString());
    return setTimeout(() => resolve(1), 3000);
  }), // 1
  new Promise(resolve => {
    console.log(new Date().toUTCString());
    return setTimeout(() => resolve(2), 2000);
  }), // 2
  new Promise(resolve => {
    console.log(new Date().toUTCString());
    return setTimeout(() => resolve(3), 1000);
  })  // 3
]).then(console.log); // 1,2,3 when promises are ready: each promise contributes an array member