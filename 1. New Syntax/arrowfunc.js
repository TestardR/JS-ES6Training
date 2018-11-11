// 'use strict';
// var getPrice = () => 5.99;
// console.log(typeof getPrice);

// 'use strict';
// var getPrice = () => 5.99;
// console.log(getPrice());

// 'use strict';
// var getPrice = count => count * 4.00;
// console.log(getPrice(2));

// 'use strict';
// var getPrice = (count, tax) => count * 4.00 * ( 1 + tax);
// console.log(getPrice(2, .07));

// 'use strict';
// var getPrice = (count, tax) => {
// 	var price = count * 4.00;
// 	price *= (1 + tax);
// 	return price;
// };
// console.log(getPrice(2, .07));

// 'use strict';
// document.addEventListener('click', function () {
// 	console.log(this); // #document, this is set to the element that is getting the event
// })

// 'use strict';
// document.addEventListener('click', () =>
// 	console.log(this)); // Window { ... }, this is set to the context of the code we are in.

// 'use strict';
// var invoice = {
// 	number: 123,
// 	process: function() {
// 		console.log(this);
// 	}
// };
// invoice.process();

// 'use strict';
// var invoice = {
// 	number: 123,
// 	process: () => console.log(this); // Window { ... }, this is set to the context of the code we are in.
// };
// invoice.process

// 'use strict';
// var invoice = {
// 	number: 123,
// 	process: function () {
// 		return () => console.log(this.number);
// };
// invoice.process()(); // 123, because process is a function, this is set to the context we are in.

// 'use strict';
// var invoice = {
//   number: 123,
//   process: function() {
//     return () => console.log(this.number);
//   }
// };
// var newInvoice = {
//   number: 456
// };
// invoice.process().bind(newInvoice)(); // bind does not work with arrow functions

// 'use strict';
// var invoice = {
//   number: 123,
//   process: function() {
//     return () => console.log(this.number);
//   }
// };
// var newInvoice = {
//   number: 456
// };
// invoice.process().call(newInvoice); // call & apply does not work with arrow functions
