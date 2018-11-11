// 'use strict';
// let invoiceNum = '1350';
// console.log(`Invoice Number: ${invoiceNum}`); // Invoice Number: 1350

// 'use strict';
// let invoiceNum = '1350';
// console.log(`Invoice Number: \${invoiceNum}`); // Invoice Number: ${invoiceNum}

// 'use strict';
// let message = `A
// B
// C`;
// console.log(message);

// // A
// // B
// // C

// 'use strict';
// let invoiceNum = '1350';
// console.log(`Invoice Number: ${'INV-' + invoiceNum}`); // Invoice Number: INV-1350

// 'use strict';
// function showMessage(message) {
//   let invoiceNum = '99';
//   console.log(message);
// }

// let invoiceNum = '1350';
// showMessage(`Invoice Number: ${invoiceNum}`); // Invoice Number: 1350, interpolation happens before the function call

// 'use strict';
// function processInvoice(segments) {
//   console.log(segments);
// }
// processInvoice`template`; // ["template"]

'use strict';

function processInvoice(segments, ...values) {
  console.log(segments);
  console.log(values);
}
let invoiceNum = '1350';
let amount = '2000';
processInvoice`Invoice: ${invoiceNum} for ${amount}`;

// ["Invoice: ", " for ", "", raw: Array(3)]
// ["1350", "2000"]
