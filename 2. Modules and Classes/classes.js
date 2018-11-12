// class Task {}
// console.log(typeof Task); // function

// class Task {}
// let task = new Task();
// console.log(typeof task); // object

// class Task {}
// let task = new Task();
// console.log(task instanceof Task);

// class Task {
//   showId() {
//     console.log('99');
//   }
// }
// let task = new Task();
// task.showId();

// class Task {
//   showId() {
//     console.log('99');
//   }
// }
// let task = new Task();
// console.log(task.showId === Task.prototype.showId); // adding a method to a class is similar to adding a method to a prototype object

// class Task {
//   constructor() {
//     console.log('constructing Task');
//   }
//   showId() {
//     console.log('99');
//   }
// }
// let task = new Task(); // 'constructing Task', constructor are called, as soon as we create an instance from the class constructor

// class Task {
//   // let taskId = 9000; not good to define a property
//   constructor() {
//     console.log('constructing Task');
//   } // , no comas here
//   showId() {
//     console.log('99');
//   }
// }
// let task = new Task();

// let task = new Task(); // error: Use before declaration
// class Task {
//   constructor() {
//     console.log('constructing Task');
//   }
// }

// let newClass = class Task {
//   constructor() {
//     console.log('constructing Task');
//   }
// };
// new newClass(); // constructing Task

// let Task = function() {
//   console.log('constructing Task');
// };
// let task = {};
// Task.call(task); // constructing Task, the object will become this in the function body

// class Task {
//   constructor() {
//     console.log('constructing Task');
//   }
// }
// let task = {};
// Task.call(task); // Error: class constructor cannot be called with the new keyword
// main difference between function and class constructors, with class constructor you cannot use call to modify the this keyword

// function Project() {};
// console.log(window.Project === Project); // true
// empty functon constructors are placed in the global area

// class Task {};
// console.log(window.Task === Task); // false
