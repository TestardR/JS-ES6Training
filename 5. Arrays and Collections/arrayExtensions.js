// 1.
// let salaries = Array(9000);
// console.log(salaries.length); // 9000, JS creates an array of size 9000

// 2.
// let salaries = Array.of(9000); // size
// console.log(salaries.length); // 1

// 3.
// let amounts = [800, 810, 820];
// let salaries = Array.from(amounts, v => v + 100); // creates a new array based on amounts
// console.log(salaries); // [900, 910, 920]

// 4.
// let amounts = [800, 810, 820];
// let salaries = Array.from(
//   amounts,
//   function(v) {
//     return v + this.adjustment; // this.adjustmennt = 50
//   },
//   { adjustment: 50 }
// );
// console.log(salaries); // [850, 860, 870]

// 5.
// let amounts = [800, 810, 820];
// let salaries = Array.from(
//   amounts,
//   v => v + this.adjustment, // arrow functions do not let you change the this keyword. It will always be set to the context that it appears in. You cannot bind it.
//   { adjustment: 50 }
// );
// console.log(salaries); // [NaN, NaN, NaN]

// 6.
// let salaries = [600, 700, 800];
// salaries.fill(900);
// console.log(salaries); // [900, 900, 900]

// 7.
// let salaries = [600, 700, 800];
// salaries.fill(900, 1); // start filling at salaries[1]
// console.log(salaries); // [600, 900, 900]

// 8.
// let salaries = [600, 700, 800];
// salaries.fill(900, 1, 2); // start filling at salaries[1] and stop at salaries[2]
// console.log(salaries); // [600, 900, 800]

// 9.
// let salaries = [600, 700, 800];
// salaries.fill(900, -1); // start filling from the end of the array
// console.log(salaries); // [600, 700, 900]

// 10.
// let salaries = [600, 700, 800];
// let result = salaries.find(value => value >= 750);
// console.log(result); // 800

// 11.
// let salaries = [600, 700, 800];
// let result = salaries.find(value => value >= 650);
// console.log(result); // 700

// 12.
// let salaries = [600, 700, 800];
// let result = salaries.findIndex(function(value, index, array) {
//   return value == this; // this = 700
// }, 700);
// console.log(result); // 1

// 13.
// let salaries = [600, 700, 800];
// salaries.copyWithin(2, 0); // 2 => index of where we will copy, 0 which value will we copy ?
// console.log(salaries); // [600, 700, 600]

// => copyWithin(target, start, end) // end not inclued

// 14.
// let ids = [1, 2, 3, 4, 5];
// ids.copyWithin(0, 1);
// console.log(ids);

// 15.
// let ids = [1, 2, 3, 4, 5];
// ids.copyWithin(3, 0, 2);
// console.log(ids);

// 16.
// let ids = ['A', 'B', 'C'];
// console.log(...ids.entries()); // [0, "A"], [1, "B"],  [2, "C"]

// 17.
// let ids = ['A', 'B', 'C'];
// console.log(...ids.keys()); // 0 1 2

// 18.
// let ids = ['A', 'B', 'C'];
// console.log(...ids.values()); // A B C
