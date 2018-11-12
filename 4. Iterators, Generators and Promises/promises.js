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
function doAsync() {
  let p = new Promise(function(resolve, reject) {
    console.log('in promise code');
    setTimeout(function() {
      console.log('rejecting...');
      reject('Database Error');
    }, 2000);
  });
  return p;
}

// let promise = doAsync();

//3. working with 2. or 1.

// doAsync().then(
//   function() {
//     console.log('Fulfilled!');
//   },
//   function() {
//     console.log('Rejected');
//   }
// );

// 4.
// doAsync().then(
//   function(value) {
//     console.log('Fulfilled! ' + value);
//   },
//   function(reason) {
//     console.log('Rejected ' + reason);
//   }
// );

// 5.
// doAsync()
//   .then(function(value) {
//     console.log('Fulfilled! ' + value);
//     return 'For Sure'; // new promise as the original one is fulfilled
//   })
//   .then(function(value) {
//     console.log('Really! ' + value);
//   });

// 6.
// doAsync().catch(function(reason) {
//   console.log('Error: ' + reason);
// });
