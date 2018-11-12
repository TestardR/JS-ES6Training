// console.log(typeof Reflect); // object

// Format : Reflect.construct(target, argumentsList[, newTarget])

// 1.
// class Restaurant {}
// let r = Reflect.construct(Restaurant);
// console.log(r instanceof Restaurant); // true, similar to new Restaurant();

// 2.
// class Restaurant {
//   constructor(name, city) {
//     console.log(`${name} in ${city}`);
//   }
// }
// let r = Reflect.construct(Restaurant, ["Zoey's", 'Goleta']); // Zoey's in Goleta

// 3.
// class Restaurant {
//   constructor() {
//     console.log(`new.target: ${new.target}`);
//   }
// }
// function restaurantMaker() {
//   console.log(`in restaurantMaker`);
// }

// let r = Reflect.construct(Restaurant, ["Zoey's", 'Goleta'], restaurantMaker); // new.target points at restaurantMaker
// // new.target: function restaurantMaker() {
// //   console.log(`in restaurantMaker`);
// // }

// Format : Reflect.apply(target, thisArgument, argumentsList)

// 4.
// class Restaurant {
//   constructor() {
//     this.id = 33;
//   }
//   show() {
//     console.log(this.id);
//   }
// }
// Reflect.apply(Restaurant.prototype.show, { id: 99 }); // 99

// 5.
// class Restaurant {
//   constructor() {
//     this.id = 33;
//   }
//   show(prefix) {
//     console.log(prefix + this.id);
//   }
// }
// Reflect.apply(Restaurant.prototype.show, { id: 22 }, ['REST:']); // REST:22
