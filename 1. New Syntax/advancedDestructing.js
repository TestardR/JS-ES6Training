// 'use strict';
// let [high, low] = [,];
// console.log(`high: ${high} low: ${low}`); // high: undefined low: undefined

// 'use strict';
// let [high, low] = undefined;
// console.log(`high: ${high} low: $[low]`); // Runtime error

// 'use strict';
// let [high, low] = null;
// console.log(`high: ${high} low: $[low]`); // Runtime error

// 'use strict';
// try {
//   let [high, low] = undefined;
// } catch (e) {
//   console.log(e.name);
// }
// // TypeError

// 'use strict';
// let [high, low] = [500, 200];
// console.log(`high: ${high} low: ${low}`); // high: 500 low: 200

// 'use strict';
// for (let [a, b] of [[5, 10]]) {
//   console.log(`${a} ${b}`); // 5, 10
// }

'use strict';
let count = 0;
for (let [a, b] of [[5, 10]]) {
  console.log(`${a} ${b}`);
  count++;
}
console.log(count);
// 5 10
// 1 we only loop once as there is only one element in the inital array, happening to be a secondary array
