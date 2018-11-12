// 1.
// function doAsync() {
//   let p = new Promise(function(resolve, reject) {
//     console.log('in promise code');
//     setTimeout(function() {
//       console.log('resolving...');
//       resolve('Database Accessed');
//     }, 2000);
//   });
//   return p;
// }

// let promise = doAsync();

// 2.
// function doAsync() {
//   let p = new Promise(function(resolve, reject) {
//     console.log('in promise code'); // in promise
//     setTimeout(function() {
//       resolve(getAnotherPromise());
//     }, 2000);
//   });
//   return p;
// }

// function getAnotherPromise() {} // assume rejected

// doAsync().then(
//   function() {
//     console.log('Ok');
//   },
//   function() {
//     console.log('Nope'); // Nope
//   }
// );

// 3.
// function doAsync() {
//   return Promise.resolve('Some String'); // create a promise
// }

// doAsync().then(
//   function(value) {
//     console.log('Ok: ' + value);
//   },
//   function(reason) {
//     console.log('Nope: ' + reason);
//   }
// );

// 4.
// function doAsync() {
//   return Promise.reject('Some String'); // create a promise, not async though
// }

// doAsync().then(
//   function(value) {
//     console.log('Ok: ' + value);
//   },
//   function(reason) {
//     console.log('Nope: ' + reason);
//   }
// );

// 5.
// let p1 = new Promise();
// let p2 = new Promise();

// Promise.all([p1, p2]).then(
//   function(value) {
//     console.log('Ok'); // Ok, one as all were fulfilled
//   },
//   function(reason) {
//     console.log('Nope');
//   }
// );

// assume p1 resolves after 5s
// assume p2 resolves after 5s

// 6.
// let p1 = new Promise();
// let p2 = new Promise();

// Promise.all([p1, p2]).then(
//   function(value) {
//     console.log('Ok');
//   },
//   function(reason) {
//     console.log('Nope'); // Nope after 2s
//   }
// );

// assume p1 resolves after 1s
// assume p2 rejects after 2s

// 7.
let p1 = new Promise();
let p2 = new Promise();

Promise.all([p1, p2]).then(
  function(value) {
    console.log('Ok');
  },
  function(reason) {
    console.log('Nope'); // Nope after 3s
  }
);

// assume p1 rejects after 3s
// assume p2 rejects after 5s

// 8.
let p1 = new Promise();
let p2 = new Promise();

Promise.race([p1, p2]).then(
  function(value) {
    console.log('Ok'); // Ok after 3s, race to be taken in charge
  },
  function(reason) {
    console.log('Nope');
  }
);

// assume p1 resolves after 3s
// assume p2 resolves after 5s

// 9.
let p1 = new Promise();
let p2 = new Promise();

Promise.race([p1, p2]).then(
  function(value) {
    console.log('Ok');
  },
  function(reason) {
    console.log('Nope'); // Nope after 3s
  }
);

// assume p1 rejects after 3s
// assume p2 resolves after 5s

// 10.
let p1 = new Promise();
let p2 = new Promise();

Promise.race([p1, p2]).then(
  function(value) {
    console.log('Ok'); // Ok after 4s
  },
  function(reason) {
    console.log('Nope');
  }
);

// assume p1 resolves after 4s
// assume p2 rejects after 5s
