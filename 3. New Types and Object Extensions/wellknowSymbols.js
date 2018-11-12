// well-know Symbols are used for metaprogramming

// let Blog = function() {};
// let blog = new Blog();
// console.log(blog.toString()); // [object Object]

// let Blog = function() {};
// Blog.prototype[Symbol.toStringTag] = 'Blog Class'; // toStringTag is the well-know symbol
// let blog = new Blog();
// console.log(blog.toString()); // [object Blog Class]

// let values = [8, 12, 16];
// console.log([].concat(values)); // [8, 12, 16]

// let values = [8, 12, 16];
// values[Symbol.isConcatSpreadable] = false;
// console.log([].concat(values)); // [[8, 12, 16]]

// let values = [8, 12, 16];
// let sum = values + 100;
// console.log(sum); // 8,12,16100

// let values = [8, 12, 16];
// values[Symbol.toPrimitive] = function(hint) { // toPrimitive allows us to set a value for the array
//   console.log(hint);
//   return 42;
// };
// let sum = values + 100;
// console.log(sum);
// // default
// // 142
