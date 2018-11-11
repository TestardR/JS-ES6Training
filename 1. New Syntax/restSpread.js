// REST

// 'use strict';
// var showCategories = function(productId, ...categories) {
//   console.log(categories instanceof Array);
// };
// showCategories(123, 'search', 'advertising'); // true, categories will become an array

// 'use strict';
// var showCategories = function(productId, ...categories) {
//   console.log(categories);
// };
// showCategories(123, 'search', 'advertising'); // ['search', 'advertising']

// 'use strict';
// var showCategories = function(productId, ...categories) {
//   console.log(categories);
// };
// showCategories(123); // []

// 'use strict';
// var showCategories = function(productId, ...categories) {};
// console.log(showCategories.length); // 1, it ignores the rest operator

// 'use strict';
// var showCategories = function(productId, ...categories) {
//     console.log(arguments.length)
// };
// showCategories('search', 'search', 'advertising'); // arguments will refer to the arguments in the function call

// 'use strict';
// var showCategories = new Function('...categories', 'return categories');
// console.log(showCategories('search', 'advertising')); // ['search', 'advertising']

// SPREAD
// 'use strict';
// var prices = [12, 20, 18];
// var maxPrice = Math.max(...prices);
// console.log(maxPrice); // 20

// 'use strict';
// var prices = [12, 20, 18];
// var newPriceArray = [...prices];
// console.log(newPriceArray);

// 'use strict';
// var newPriceArray = Array(...[, ,]);
// console.log(newPriceArray); // [undefined, undefined], we can leave a trailin array, JS will ignores it.

// 'use strict';
// var newPriceArray = [...[, ,]];
// console.log(newPriceArray); // [undefined, undefined]

// 'use strict';
// var maxCode = Math.max(...'43210');
// console.log(maxCode); // 4

'use strict';
var codeArray = ['A', ...'BCD', 'E'];
console.log(codeArray); // ["A", "B", "C", "D", "E"]
