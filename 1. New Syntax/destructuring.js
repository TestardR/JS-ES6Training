// 'use strict';
// let salary = ['32000', '50000', '75000'];
// let [low, average, high] = salary;
// console.log(average); // "50000"

// 'use strict';
// let salary = ['32000', '50000'];
// let [low, average, high] = salary;
// console.log(high); // undefined

// 'use strict';
// let salary = ['32000', '50000', '75000'];
// let [low, , high] = salary;
// console.log(high); // 75000

// 'use strict';
// let salary = ['32000', '50000', '75000'];
// let [low, ...remaining] = salary;
// console.log(remaining); // ["50000", "75000"]

// 'use strict';
// let salary = ['32000', '50000'];
// let [low, average, high = '88000'] = salary;
// console.log(high); // 88000

// 'use strict';
// let salary = ['32000', '50000', ['88000', '99000']];
// let [low, average, [actualLow, actualHigh]] = salary;
// console.log(actualLow); // 88000

// 'use strict';
// function reviewSalary([low, average], high = '88000') {
//   console.log(average);
// }

// reviewSalary(['32000', '50000']);

// 'use strict';
// let salary = {
//   low: '32000',
//   average: '50000',
//   high: '75000'
// };
// let { low, average, high } = salary;
// console.log(high); // 75000

// 'use strict';
// let salary = {
//   low: '32000',
//   average: '50000',
//   high: '75000'
// };

// let { low: newLow, average: newAverage, high: newHigh } = salary;
// console.log(newHigh); // 75000, values on the left are properties in the object, on the right we assign them to new variables.

// 'use strict';
// let salary = {
//   low: '32000',
//   average: '50000',
//   high: '75000'
// };

// let newLow, newAverage, newHigh;
// ({ low: newLow, average: newAverage, high: newHigh } = salary); // to destructure in such a manner use ()! otherwise JS thinks you are defining a block
// console.log(newHigh); // 75000,

// 'use strict';
// let [maxCode, minCode] = 'AZ';
// console.log(`min: ${minCode} max: ${maxCode}`); // min: Z max: A
