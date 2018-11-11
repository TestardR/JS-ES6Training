// class Project {
//   constructor() {
//     console.log('constructing Project');
//   }
// }
//
// class SoftwareProject extends Project {}
//
// let p = new SoftwareProject(); // constructing project

// class Project {
//   constructor(name) {
//     console.log('constructing Project' + name);
//   }
// }
//
// class SoftwareProject extends Project {}
//
// let p = new SoftwareProject('Mazatlan'); // constructing project Mazatlan

// class Project {
//   constructor() {
//     console.log('constructing Project');
//   }
// }
// class SoftwareProject extends Project {
//   constructor() {
//     super(); // by adding super, the constructor engine will know when to instantiate Project and call its constructor
//     console.log('constructing SoftwareProject');
//   }
// }
// let p = new SoftwareProject();

// class Project {
//   constructor() {
//     console.log('constructing Project');
//   }
// }
// class SoftwareProject extends Project {
//   constructor() {
//     //   super(); // Reference error
//     console.log('constructing SoftwareProject');
//   }
// }
// let p = new SoftwareProject();
// // => Rule: if SoftwareProject is going to have a constructor, it needs super();

// class Project {
//   getTaskCount() {
//     return 50;
//   }
// }
// class SoftwareProject extends Project {}
// let p = new SoftwareProject();
// console.log(p.getTaskCount()); // 50

// class Project {
//   getTaskCount() {
//     return 50;
//   }
// }
// class SoftwareProject extends Project {
//   getTaskCount() {
//     return 66;
//   }
// }
// let p = new SoftwareProject();
// console.log(p.getTaskCount()); //66

// class Project {
//   getTaskCount() {
//     return 50;
//   }
// }
// class SoftwareProject extends Project {
//   getTaskCount() {
//     return super.getTaskCount() + 6;
//   }
// }
// let p = new SoftwareProject();
// console.log(p.getTaskCount()); //56

// let project = {
//   getTaskCount() {
//     return 50;
//   }
// };
// let softwareProject = {
//   getTaskCount() {
//     return super.getTaskCount() + 7;
//   }
// };
// Object.setPrototypeOf(softwareProject, project);
// console.log(softwareProject.getTaskCount()); // 57
