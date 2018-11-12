// 1.
// let a = {
//   x: 1
// };

// let b = {
//   y: 2
// };

// Object.setPrototypeOf(a, b); // a's prototype will  be assigned to b.
// console.log(a.y);

// 2.
// let a = { a: 1 },
//   b = { b: 2 };
// let target = {};
// Object.assign(target, a, b); // will populate target with a and b
// console.log(target); // {a: 1, b: 2}

// 3.
// let a = { a: 1 },
//   b = { a: 5, b: 2 };
// let target = {};
// Object.assign(target, a, b);
// console.log(target); // {a: 5, b: 2}

// 4.
// let a = { a: 1 },
//   b = { a: 5, b: 2 };
// Object.defineProperty(b, 'c', {
//   value: 10,
//   enumerable: false
// });

// let target = {};
// Object.assign(target, a, b);
// console.log(target); // c is not included because it not enumerable
// // properties are enumerable by default

// 5.
// let a = { a: 1 },
//   b = { a: 5, b: 2 },
//   c = { c: 20 };

// Object.setPrototypeOf(b, c);

// let target = {};
// Object.assign(target, a, b);
// console.log(target); // {a: 5, b: 2}
// // Object.assign will only look at the objects, it will not walk up the prototype chain.

// 6.
// let amount = NaN;
// console.log(amount === amount); // false

// 7.
// let amount = NaN;
// console.log(Object.is(amount, amount)); // true, Object.is works as ===, here an object is always equal to itself.

// 8.
// let amount = 0,
//   total = 0;
// console.log(amount === total); // true

// 9.
// let amount = 0,
//   total = 0;
// console.log(Object.is(amount, total)); // false

// 10.
let article = {
  title: 'Whiteface Mountain',
  [Symbol.for('article')]: 'My Article'
};

console.log(Object.getOwnPropertySymbols(article)); // [Symbol(article)], gives the symbol property in an array
