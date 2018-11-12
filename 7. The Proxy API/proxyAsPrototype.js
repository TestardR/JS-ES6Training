// var t = {
//   tableId: 99
// };

// var p = new Proxy(
//   {},
//   {
//     get: function(target, prop, receiver) {
//       return 'Property ' + prop + " doesn't exist...";
//     }
//   }
// );

// Object.setPrototypeOf(t, p);
// console.log(t.tableId); // 99
// console.log(t.size); // does not exist
