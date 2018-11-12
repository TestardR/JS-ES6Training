// Generators is a special function, it does not rull all the way through necessarily. It is able to yield and called multiple times. We can use an iterator to call a generator multiple times.

// 1.
//function *process() {
//   yield 8000;
//   yield 8001;
// }
//
// let it = process(); // the result of a generator is an iterator that we assigned to it.
// console.log(it.next()); // {value: 8000, done: false}

// 2.
// function *process() {
//   yield 8000;
//   yield 8001;
// }
// let it = process();
// it.next();
// console.log(it.next()); // {value: 8001, done: false}

// 3.
// function *process() {
//     yield 8000;
//     yield 8001;
//   }
//   let it = process();
//   it.next();
//   console.log(it.next()); // {value: undefined, done: true}

// 4.
// function *process() {
//   let nextId = 7000;
//   while (true) yield nextId++;
// }
// let it = process();
// it.next();
// console.log(it.next().value); // 7001

// 5.
// function *process() {
//   let nextId = 7000;
//   while (true) yield nextId++;
// }
// for (let id of process()) {
//   if (id > 7002) break;
//   console.log(id);
// }
// 7000
// 7001
// 7002
