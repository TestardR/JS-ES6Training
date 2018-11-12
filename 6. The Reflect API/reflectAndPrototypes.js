// Format : Reflect.getPrototypeOf(target)

// 1.
// class Location {
//   constructor() {
//     console.log('constructing Location');
//   }
// }
// class Restaurant extends Location {}
// console.log(Reflect.getPrototypeOf(Restaurant));
// answer: class Location {
//     constructor() {
//       console.log('constructing Location');
//     }
//   }

// Format : Reflect.setPrototypeOf(target, prototype)
// 2.
// class Restaurant {}
// let setup = {
//   getId() {
//     return 88;
//   }
// };

// let r = new Restaurant();
// Reflect.setPrototypeOf(r, setup);
// console.log(r.getId()); // 88
