// In JavaScript an iterator is an object which defines a sequence and potentially a return value upon its termination. More specifically an iterator is any object which implements the Iterator protocol by having a next() method which returns an object with two properties: value, the next value in the sequence; and done, which is true if the last value in the sequence has already been consumed. If value is present alongside done, it is the iterator's return value.

// let ids = [9000, 9001, 9002];
// console.log(typeof ids[Symbol.iterator]); // function

// let ids = [9000, 9001, 9002];
// let it = ids[Symbol.iterator](); // gives an unique symbol to ids
// console.log(it.next()); // {value: 9000, done: false} // done means we have not exhausted the use of our iterator, value 9000 is the first value

// let ids = [9000, 9001, 9002];
// let iter = ids[Symbol.iterator]();
// iter.next();
// iter.next();
// console.log(iter.next()); // {value: 9002, done: false}

// let ids = [9000, 9001, 9002];
// let iter = ids[Symbol.iterator]();
// iter.next();
// iter.next();
// iter.next();
// console.log(iter.next()); // {value: undefined, done: true}

// let idMaker = {
//   [Symbol.iterator]() {
//     let nextId = 8000;
//     return {
//       next() {
//         return {
//           value: nextId++,
//           done: false
//         };
//       }
//     };
//   }
// };
// let it = idMaker[Symbol.iterator]();
// console.log(it.next().value); // 8000
// console.log(it.next().value); // 8001

// let idMaker = {
//   [Symbol.iterator]() {
//     let nextId = 8000;
//     return {
//       next() {
//         return {
//           value: nextId++,
//           done: false
//         };
//       }
//     };
//   }
// };
// for (let v of idMaker) {
//   if (v > 8002) break;
//   console.log(v);
// }
// 8000
// 8001
// 8002

// let idMaker = {
//   [Symbol.iterator]() {
//     let nextId = 8000;
//     return {
//       next() {
//         let value = nextId > 8002 ? undefined : nextId++;
//         let done = !value; // value is undefined, done will be true
//         return { value, done }; // the iterator determines when its done, not the for of loop
//       }
//     };
//   }
// };
// for (let v of idMaker) {
//   console.log(v);
// }
// // 8000
// // 8001
// // 8002
