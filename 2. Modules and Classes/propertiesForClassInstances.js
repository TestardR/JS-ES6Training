// class Project {
//   constructor() {
//     this.location = 'Mazatlan';
//   }
// }
// class SoftwareProject extends Project {
//   constructor() {
//     super();
//   }
// }
// let p = new SoftwareProject();
// console.log(p.location); // Mazatlan

// class Project {
//   constructor() {
//     let location = 'Mazatlan'; // goes out of scope quickly, wont be attached to an instance
//   }
// }
// class SoftwareProject extends Project {
//   constructor() {
//     super();
//   }
// }
// let p = new SoftwareProject();
// console.log(p.location); // undefned

class Project {
  constructor() {
    this.location = 'Mazatlan';
  }
}
class SoftwareProject extends Project {
  constructor() {
    super(); // the key is to called super() before we call this
    this.location = this.location + 'Beach';
  }
}
let p = new SoftwareProject();
console.log(p.location); // Mazatlan Beach
