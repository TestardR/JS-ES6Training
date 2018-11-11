'use strict';

// var price = 5.99,
//   quantity = 30;
// var productView = {
//   price,
//   quantity
// };
// console.log(productView); // {price: 5.99, quantity: 30}

// 'use strict';

// var price = 5.99,
//   quantity = 30;
// var productView = {
//   price,
//   quantity,
//   calculateValue() {
//     return this.price * this.quantity;
//   }
// };
// console.log(productView.calculateValue()); // 179.70000000000002

// 'use strict';

// var price = 5.99,
//   quantity = 10;
// var productView = {
//   price,
//   quantity,
//   'calculate value'() {
//     return this.price * this.quantity;
//   }
// };
// console.log(productView['calculate value']()); // 59.900000000000006

// 'use strict';
// var field = 'dynamicField';
// var price = 5.99;
// var productView = {
//   [field]: price
// };
// console.log(productView); // {dynamicField: 5.99}, we have to use bracket notation within the object literal

// 'use strict';
// var field = 'dynamicField';
// var price = 5.99;
// var productView = {
//   [field + '-001']: price
// };
// console.log(productView); // {dynamicField-001: 5.99}

// 'use strict';
// var method = 'doIt';
// var productView = {
//   [method + '-001']() {
//     console.log('in a method');
//   }
// };
// productView['doIt-001'](); // in a method

// 'use strict';
// var ident = 'productId';
// var productView = {
//   get [ident]() {
//     return true;
//   },
//   set [ident](value) {}
// };
// console.log(productView.productId); // true

