// better control of generators by using throw and return commands

// 1.
// function* process() {
//   try {
//     yield 9000;
//     yield 9001;
//     yield 9002;
//   } catch (e) {}
// }
// let it = process();
// console.log(it.next().value); // 9000
// console.log(it.throw('foo')); // {value: undefined, done: true}
// console.log(it.next()); // {value: undefined, done: true}

// logic 1. 9000, 2. then when we call throw we received and object with value set to undefined and done set to true
// An exception was raised, calling our catch block, with nothing in it. 3. call next, but by that time our generator was terminated.

// 2.
// function* process() {
//   yield 9000;
//   yield 9001;
//   yield 9002;
// }
// let it = process();
// console.log(it.next().value); // 9000
// console.log(it.throw('foo')); // Exception: foo
// console.log(it.next()); // {execution terminates}

// 3.
// function* process() {
//   yield 9000;
//   yield 9001;
//   yield 9002;
// }
// let it = process();
// console.log(it.next().value); // 9000

// console.log(it.return('foo')); // {value: "foo", done: true}
// console.log(it.next()); // {value: undefined, done: true}
