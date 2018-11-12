// 1.
// function Employee() {
//   this.name = 'Milton Waddams';
//   this.salary = 0;
// }
// var e = new Employee();
// var p = new Proxy(e, {
//   get: function(target, prop, receiver) {
//     console.log(target); // Employee {name: "Milton Waddams", salary: 0}
//     console.log(prop); // salary
//     console.log(receiver); // Proxy {name: "Milton Waddams", salary: 0} // this
//     return 'Attempted access: ' + prop;
//   }
// });

// console.log(p.salary); // Attempted access: salary

// 2.
// function Employee() {
//   this.name = 'Milton Waddams';
//   this.salary = 0;
// }
// var e = new Employee();
// var p = new Proxy(e, {
//   get: function(target, prop, receiver) {
//     return Reflect.get(target, prop, receiver);
//   }
// });

// console.log(p.salary); // 0

// 3.
// function Employee() {
//   this.name = 'Milton Waddams';
//   this.salary = 0;
// }
// var e = new Employee();
// var p = new Proxy(e, {
//   get: function(target, prop, receiver) {
//     if (prop === 'salary') return 'Denied';
//     return Reflect.get(target, prop, receiver);
//   }
// });

// console.log(p.salary); // Denied
// console.log(p.name); // Milton Waddams
