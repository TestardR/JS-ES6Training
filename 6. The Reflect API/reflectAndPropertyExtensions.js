// Format: Reflect.preventExtensions(target);

// 1.
// let rest = {
//   id: 2000
// };

// rest.location = 'Goleta';
// console.log(rest.location);

// 2.
// let rest = {
//   id: 2000
// };

// Reflect.preventExtensions(rest);
// rest.location = 'Goleta';
// console.log(rest.location); // undefined

// Format: Reflect.isExtensible(target)
// let rest = {
//   id: 2000
// };

// console.log(Reflect.isExtensible(rest)); // true
// Reflect.preventExtensions(rest);
// console.log(Reflect.isExtensible(rest)); // false
