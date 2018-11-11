// new.target : points to the constructor by which it was called

// class Project {
//   constructor() {
//     console.log(typeof new.target); // function
//   }
// }
// var p = new Project();

// class Project {
//   constructor() {
//     console.log(new.target); // constructor() { console.log(new.target) }
//   }
// }
// var p = new Project();

// class Project {
//   constructor() {
//     console.log(new.target);
//   }
// }
// class SoftwareProject extends Project {
//   constructor() {
//     super();
//   }
// }
// var p = new SoftwareProject(); //  constructor() { super(); }

class Project {
  constructor() {
    console.log(new.target.getDefaultId()); // it works only because getDefaultId is static
  }
}
class SoftwareProject extends Project {
  static getDefaultId() {
    return 99;
  }
}
var p = new SoftwareProject(); // 99
