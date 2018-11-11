// static members only exist on the class itself, not on instances

// class Project {
//   static getDefaultId() {
//     return 0;
//   }
// }
// console.log(Project.getDefaultId()); // 0

// class Project {
//   static getDefaultId() { // static methods are attached to the constructor function
//     return 0;
//   }
// }
// var p = new Project();
// console.log(p.getDefaultId()); // Error

// class Project {
//   static let id = 0; // does not work with properties, only static methods
// }
// console.log(Project.id);

// class Project {}
// Project.id = 99; // we can still create static properties this way, attaching them to the class constructor
// console.log(Project.id); // 99
