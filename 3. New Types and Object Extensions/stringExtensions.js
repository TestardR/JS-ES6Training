// 1.
// let title = 'Santa Barbara Surf Riders';
// console.log(title.startsWith('Santa')); // true

// 2.
// let title = 'Santa Barbara Surf Riders';
// console.log(title.endsWith('Riders')); // true

// 3.
// let title = 'Santa Barbara Surf Riders';
// console.log(title.includes('ba')); // true

// 4.
// var title = "Surfer's \u{1f3c4} Blog";
// console.log(title); // Surfer's 🏄 Blog // astral plane values

// 5.
// var surfer = '\u{1f3c4}';
// console.log(surfer.length); // 2

// 6.
// var surfer = '\u{1f30a}\u{1f3c4}\u{1f40b}';
// console.log(Array.from(surfer).length); // Array.from allows to pass the string in an array
// console.log(surfer); // 3 elements in the aray

// 7. ES5
// var title = 'Mazatla\u0301n';
// console.log(title + ' ' + title.length); // Mazatlán 9, but only 8 characters showing

// 8. ES6
// var title = 'Mazatla\u0301n';
// console.log(title + ' ' + title.normalize().length); // Mazatlán 8

// 9.
// var title = 'Mazatla\u0301n';
// console.log(title.normalize().codePointAt(7).toString(16)); // codePointAt to see what character is actually there, toString(16) to print the value as an hexadecimal b16 // 6e (right value)

// 10.
// console.log(String.fromCodePoint(0x1f3c4)); // string from hex value

// 11.
// let title = 'Surfer';
// let output = String.raw`${title} \u{1f3c4}\n`;
// console.log(output); // Surfer \u{1f3c4}\n

// 12.
// let wave = '\u{1f30a}';
// console.log(wave.repeat(10)); // 🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊
