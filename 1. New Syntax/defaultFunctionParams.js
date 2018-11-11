// 'use strict';
// var getProduct = function(productId = 1000) { // this how we specify default values in ES6
//   console.log(productId);
// };
// getProduct();

// 'use strict';
// var getProduct = function(productId = 1000, type = 'software') {
//   console.log(productId + ', ' + type);
// };
// getProduct(undefined, 'hardware'); // specify undefined will tell JS to use default values

// 'use strict';
// var getTotal = function(price, tax = price * 0.07) {
//   // own little scope
//   console.log(price + tax);
// };
// getTotal(5.0); // 5.35

// 'use strict';
// var baseTax = 0.07
// var getTotal = function(price, tax = price * baseTax) {
//   // own little scope
//   console.log(price + tax);
// };
// getTotal(5.0); // 5.35

// 'use strict';
// var generateBaseTax = () => 0.07;
// var getTotal = function(price, tax = price * generateBaseTax()) {
//   // own little scope
//   console.log(price + tax);
// };
// getTotal(5.0); // 5.35

// 'use strict';
// var getTotal = function(price, tax = 0.07) {
//   console.log(arguments.length);
// };
// getTotal(5.0); // 1, JS ignores any default that gets set

// 'use strict';
// var getTotal = function(price = adjustment, adjustment = 1) { // price = adjustment, JS does not know adjustment yet.
//   console.log(price + adjustment);
// };
// getTotal(); // SyntaxError

// 'use strict';
// var getTotal = function(price = adjustment, adjustment = 1) { yet.
//   console.log(price + adjustment);
// };
// getTotal(5); // 6, JS did not have to look for defaults

'use strict';
var getTotal = new Function('price = 20.00', 'return price;');
console.log(getTotal()); // 20
