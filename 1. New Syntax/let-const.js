// let, const, and Block Scoping

'use strict';
// console.log(productId);
// var productId = 12; // undefined

// console.log(productId);
// let productId = 11; // error

// let productId = 12;
// console.log(productId);

// let productId;
// console.log(productId); // undefined

// let productId = 12;
// {
// 	let productId = 2000;
// }
// console.log(productId); // 12

// {
// 	let productId = 2000;
// }
// console.log(productId); // error

// function updateProductId(){
// 	productId = 12;
// }
// let productId = null;
// updateProductId();
// console.log(productId); // 12

// let updateFunctions = [];
// for (var i = 0; i < 2; i++) {
// 	updateFunctions.push(function() {
// 		return i;
// 	});
// }
// console.log(updateFunctions[0]()); // 2

// let updateFunctions = [];
// for (let i = 0; i < 2; i++) {
// 	updateFunctions.push(function() {
// 		return i;
// 	});
// }
// console.log(updateFunctions[0]()); 
// // 0, when we use let in a for loop, each iteration of the loop will get its own i variable and any closure will close over its own value of i. 

// const MARKUP_PCT = 100;
// console.log(MARKUP_PCT) // 100

// const MARKUP_PCT;
// console.log(MARKUP_PCT) // Syntax error

// const MARKUP_PCT = 100;
// MARKUP_PCT = 10;
// console.log(MARKUP_PCT) // TypeError

// const MARKUP_PCT = 100;
// if(MARKUP_PCT > 0) {
// 	const MARKUP_PCT = 10;
// }
// console.log(MARKUP_PCT); // 100

// Arrow Functions
// Default Function Parameters
// Rest and Spread
// Object Literal extensions
// for ... of loops
// Octal and Binary literals
// Template literals
// Destructuring