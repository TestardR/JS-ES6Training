// 1.
// let perks = new Set();

// perks.add('Car');
// perks.add('Super Long Vacation');

// console.log(perks.size); // 2

// 2.
// let perks = new Set();

// perks.add('Car');
// perks.add('Super Long Vacation');
// perks.add('Car');

// console.log(perks.size); // 2

// 3.
// let perks = new Set(['Car', '10 Weeks Vacation', 'Jet']);
// console.log(perks.size);

// 4.
// let perks = new Set(['Car', '10 Weeks Vacation', 'Jet']);
// let newPerks = new Set(perks);
// console.log(newPerks.size); // 3

// 5.
// let perks = new Set(['Car', '10 Weeks Vacation', 'Jet']);
// console.log(perks.has('Jet'));
// console.log(perks.has('Cool Hat'));

// 6.
// let perks = new Set(['Car', 'Jet']);
// console.log(...perks.keys()); // Car Jet
// console.log(...perks.values()); // Car Jet
// console.log(...perks.entries());
// ['Car', 'Car'][('Jet', 'Jet')];

// 7.
// let perks = new Set([{ id: 800 }, { id: 800 }]);
// console.log(perks.size); // 2, identical but separate objects

// 8.
// let perks = new Set([1, '1']);
// console.log(perks.size); // 2

// WeakSet
// 9.
// let perks = new WeakSet([1, 2, 3]);
// console.log(perks.size); // Error we can't use primitive types

// 10.
// let p1 = { name: 'Car' };
// let p2 = { name: 'Jet' };
// let perks = new WeakSet([p1, p2]);
// console.log(perks.size); // undefined, no access to what it holds

// 11.
// let p1 = { name: 'Car' };
// let p2 = { name: 'Jet' };
// let perks = new WeakSet([p1, p2]);
// console.log(perks.has(p1)); // true

// 12.
// let p1 = { name: 'Car' };
// let p2 = { name: 'Jet' };
// let perks = new WeakSet([p1, p2]);
// p1 = null;
// console.log(perks.has(p1)); // false
