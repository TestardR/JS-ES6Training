// Format : Reflect.get(target, propertyKey[, receiver])

// 1.
// class Restaurant {
//   constructor() {
//     this.id = 8000;
//   }
// }

// let r = new Restaurant();
// console.log(Reflect.get(r, 'id')); // 8000

// 2.
// class Restaurant {
//   constructor() {
//     this._id = 9000;
//   }
//   get id() {
//     return this._id;
//   }
// }

// let r = new Restaurant();
// console.log(Reflect.get(r, 'id', { _id: 88 })); // 88

// Format : Reflect.set(target, propertyKey, value[, receiver])

// 3.
// class Restaurant {
//   constructor() {
//     this._id = 9000;
//   }
// }

// let r = new Restaurant();
// Reflect.set(r, 'id', 88);
// console.log(r.id); // 88

// 4.
// class Restaurant {
//   constructor() {
//     this._id = 9000;
//   }
//   set id(value) {
//     this._id = value;
//   }
// }

// let r = new Restaurant();
// let alt = { id: 88 };
// Reflect.set(r, '_id', 88, alt);
// console.log(r._id); // 9000
// console.log(alt._id); // 88

// Format : Reflect.has(target, propertyKey)

// 5.
// class Location {
//   constructor() {
//     this.city = 'Goleta';
//   }
// }

// class Restaurant extends Location {
//   constructor() {
//     super();
//     this.id = 9000;
//   }
// }

// let r = new Restaurant();
// console.log(Reflect.has(r, 'id')); // true
// console.log(Reflect.has(r, 'city')); // true

// Format : Reflect.ownKeys(target)

// 6.
// class Location {
//   constructor() {
//     this.city = 'Goleta';
//   }
// }

// class Restaurant extends Location {
//   constructor() {
//     super();
//     this.id = 9000;
//   }
// }

// let r = new Restaurant();
// console.log(Reflect.ownKeys(r)); // ["city", "id"]

// Format : Reflect.defineProperty(target, propertyKey, attributes)
// 7.
// class Restaurant {}
// let r = new Restaurant();

// Reflect.defineProperty(r, 'id', {
//   value: 2000,
//   configurable: true,
//   enumerable: true
// });

// console.log(r['id']); // 2000

// Format : Reflect.deleteProperty(target, propertyKey)
// let rest = {
//   id: 2000
// };

// console.log(rest.id); // 2000
// Reflect.deleteProperty(rest, 'id');
// console.log(rest.id); // undefined

// Format : Reflect.getOwnPropertyDescriptor(target, propertyKey)
// let rest = {
//   id: 2000
// };

// let d = Reflect.getOwnPropertyDescriptor(rest, 'id');
// console.log(d); // {value: 2000, writable: true, enumerable: true, configurable: true}
