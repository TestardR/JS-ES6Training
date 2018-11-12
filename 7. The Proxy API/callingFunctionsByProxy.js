// function getId() {
//   return 55;
// }

// var p = new Proxy(getId, {
//   apply: function(target, thisArg, argumentsList) {
//     console.log(target); // ƒ getId() { return 55; }
//     console.log(thisArg); // []
//     console.log(argumentsList); // 55
//     return Reflect.apply(target, thisArg, argumentsList);
//   }
// });

// console.log(p()); //55 // p is  proxy to getId
