// 1.
// function *process() {
//   yield 8000;
// }

// let it = process();
// console.log(it.next()); // {value: 8000, done: false}

// 2.
// function *process() {
//   yield;
// }
// let it = process();
// console.log(it.next()); // {value: undefined, done: false}

// 3.
// function *process() {
//   yield;
// }
// let it = process();
// console.log(it.next()); // {value: undefined, done: false}

// 4.
// function* process() {
//   let result = yield;
//   console.log(`result is ${result}`);  // result is 200

// }
// let it = process();
// it.next();
// it.next(200);

// 5.
// function *process() {
//   let result = yield;
//   console.log(`result is ${result}`); // result is 200
// }
// let it = process();
// it.next();
// console.log(it.next(200)); // {value: undefined, done: true}

// 6.
// function* process() {
//   let newArray = [yield, yield, yield];
//   console.log(newArray[2]); // 42
// }
// let it = process();
// it.next();
// it.next(2);
// it.next(4);
// it.next(42);

// 7.
// function *process() {
//     let value = 4 * (yield 42);
//     console.log(value); // 40, when the generator yields, we call it.next and get 10. 10 * 4 is 40, 42 is discarded as we did not catch the result of it.next as a function call
// }
// let it = process();
// it.next();
// it.next(10);

// 8.
// function *process() {
//   yield 42;
//   yield [1, 2, 3];
// }
// let it = process();
// console.log(it.next().value); // 42
// console.log(it.next().value); // [1, 2, 3]
// console.log(it.next().value); // undefined

// 9.
// function *process() {
//   yield 42;
//   yield* [1, 2, 3];
// }
// let it = process();
// console.log(it.next().value); // 42
// console.log(it.next().value); // 1
// console.log(it.next().value); // 2
// console.log(it.next().value); // 3
// console.log(it.next().value); // undefined
