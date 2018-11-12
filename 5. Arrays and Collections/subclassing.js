// extending classes

// 1.
// class Perks extends Array {}
// let a = Perks.from([5, 10, 15]); // .from is a method from Array
// console.log(a instanceof Perks); // true

// 2.
// class Perks extends Array {}
// let a = Perks.from([5, 10, 15]); /
// console.log(a.length); // 3

// 3.
// class Perks extends Array {}
// let a = Perks.from([5, 10, 15]);
// let newArray = a.reverse();
// console.log(newArray instanceof Perks); // true

// 4.
// class Perks extends Array {}
// let a = Perks.from([5, 10, 15]);
// let newArray = a.reverse();
// console.log(newArray instanceof Array); // true

// 5.
// class Perks extends Array {
//   sum() {
//     let total = 0;
//     this.map(v => (total += v));
//     return total;
//   }
// }

// let a = Perks.from([5, 10, 15]);
// console.log(a.sum()); // 30
