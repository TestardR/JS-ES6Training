// The ArrayBuffer object is used to represent a generic, fixed-length raw binary data buffer. You cannot directly manipulate the contents of an ArrayBuffer; instead, you create one of the typed array objects or a DataView object which represents the buffer in a specific format, and use that to read and write the contents of the buffer.

// 1.
// let buffer = new ArrayBuffer(1024); // size of the arrayBuffer
// console.log(buffer.byteLength); // 1024

// 2.
// let buffer = new ArrayBuffer(1024);
// buffer[0] = 0xff; // hexadecimal 255
// console.log(buffer[0]); // 255

// JavaScript typed arrays are array-like objects and provide a mechanism for accessing raw binary data.

// 3.
// let buffer = new ArrayBuffer(1024);
// let a = new Int8Array(buffer); // signed array, hexadecimal will give out -1
// a[0] = 0xff;
// console.log(a[0]); // -1

// 4.
// let buffer = new ArrayBuffer(1024);
// let a = new Uint8Array(buffer); // unsigned array
// a[0] = 0xff;
// console.log(a[0]); // 255

// 5.
// let buffer = new ArrayBuffer(1024);
// let a = new Uint8ClampedArray(buffer); // unsigned array, campled array, negative values will be set to 0. Value over 255, will be set to 255.
// a[0] = -12;
// console.log(a[0]); // 0

// 6.
// let buffer = new ArrayBuffer(1024);
// let a = new Uint8Array(buffer);
// let b = new Uint16Array(buffer);
// a[0] = 1;
// console.log(b[0]); // 1, both arrays are using the same underlying data (buffer)

// 7.
// let buffer = new ArrayBuffer(1024);
// let a = new Uint8Array(buffer);
// let b = new Uint16Array(buffer);
// a[1] = 1;
// console.log(b[0]); // 256
