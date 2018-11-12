// let pattern = /\u{1f3c4}/;
// console.log(pattern.test('🏄')); // false

// let pattern = /\u{1f3c4}/u;
// console.log(pattern.test('🏄')); // true, add the u at the end !

// let pattern = /^.Surfer/; // ^ represents the end of the line, so any character
// console.log(pattern.test('🏄Surfer')); // false

// let pattern = /^.Surfer/u;
// console.log(pattern.test('🏄Surfer')); // true

// let pattern = /900/y; // y flag performs the search from the last index
// console.log(pattern.lastIndex); // O
// console.log(pattern.test('800900')); // false

// let pattern = /900/y;
// pattern.lastIndex = 3;
// console.log(pattern.test('800900')); // true, 900 starts at index three

// let pattern = /900/yg;
// console.log(pattern.flags); // gy, flags tells us the flags on an expression, Order will be 'gimuy'
