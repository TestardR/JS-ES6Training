// console.log(Number.parseInt === parseInt); // true
// better to use Number.parseInt, without Number parseInt is a global function (will be deprecated)

// console.log(Number.parseFloat === parseFloat) // true
// same conclusion

// let s = 'Nan';
// console.log(isNan(s)); // true (ES5), it convers the string into a real NaN
// console.log(Number.isNan(s)); // false, because it is a string

// let s = '8000';
// console.log(isFinite(s)); // true
// console.log(Number.isFinite(s)); // false, because it is a string

// let sum = 408.2;
// console.log(Number.isInteger(sum)); // false, it is a float (decimal)

// console.log(Number.isInteger(NaN)); // false
// console.log(Number.isInteger(Infinity)); // false
// console.log(Number.isInteger(undefined)); // false
// console.log(Number.isInteger(3)); // true

// let a = Math.pow(2, 53) - 1;
// console.log(Number.isSafeInteger(a)); // true, a safeInt is a number that can be accurately represented using floating point notation // highest safe interger
// a = Math.pow(2, 53);
// console.log(Number.isSafeInteger(a)); // false

console.log(Number.EPSILON); // 2.220446049250313e-16
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log(Number.MIN_SAFE_INTEGER); // - 9007199254740991
