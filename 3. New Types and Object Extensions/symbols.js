// Symbol gives a unique id to the element it is assign to

// let eventSymbol = Symbol('resize event');
// console.log(typeof eventSymbol); // symbol

// let eventSymbol = Symbol('resize event');
// console.log(eventSymbol.toString()); // Symbol(resize event)

// let s = Symbol('event');
// let s2 = Symbol('event');
// console.log(s === s2); // false

// let s = Symbol.for('event'); // we assign the unique id with for.
// console.log(s.toString()); // Symbol('event')

// let s = Symbol.for('event');
// let s2 = Symbol.for('event');
// console.log(s === s2); // true // same unique id

// let s = Symbol.for('event');
// let s2 = Symbol.for('event2');
// console.log(s === s2); // false

// let s = Symbol.for('event');
// let description = Symbol.keyFor(s); // we can pass around our unique id with keyFor
// console.log(description); // event, we get the human readable debug string used to assign a unique id, never the unique id

// let article = {
//     title = 'Whiteface Mountain',
//     [Symbol.for('article')]: 'My Article'
// };
//
// let value = article[Symbol.for('article')];
// console.log(value); // My Article

// let article = {
//   title: 'Whiteface Mountain',
//   [Symbol.for('article')]: 'My Article'
// };
// console.log(Object.getOwnPropertyNames(article)); // It only shows ['title']

let article = {
  title: 'Whiteface Mountain',
  [Symbol.for('article')]: 'My Article'
};
console.log(Object.getOwnPropertySymbols(article)); // [Symbol(article)]
