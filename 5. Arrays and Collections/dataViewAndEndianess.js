// In big Endian : the most significant byte is stored first.
// In litte Endian : the least significant by is stored first.

// 1.
// let buffer = new ArrayBuffer(1024);
// let dv = new DataView(buffer);
// console.log(dv.byteLength); // 1024

// 2.
// let buffer = new ArrayBuffer(1024);
// let dv = new DataView(buffer, 0, 32); // start, end
// console.log(dv.byteLength); // 32

// 3.
// let buffer = new ArrayBuffer(1024);
// let dv = new DataView(buffer);
// dv.setUint8(0, 1);
// console.log(dv.getUint16(0)); // 256 // big endian by default, most significant value first

// 4.
let buffer = new ArrayBuffer(1024);
let dv = new DataView(buffer);
dv.setUint8(0, 1);
console.log(dv.getUint16(0, true)); // 1 // litte endian by setting true, least significant value first
