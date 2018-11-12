// MAP
// 1.
// let employee1 = { name: 'Jake' };
// let employee2 = { name: 'Janet' };

// let employees = new Map();
// employees.set(employee1, 'ABC');
// employees.set(employee2, '123');

// console.log(employees.get(employee1)); // ABC

// 2.
// let employee1 = { name: 'Jake' };
// let employee2 = { name: 'Janet' };

// let employees = new Map();
// employees.set(employee1, 'ABC');
// employees.set(employee2, '123');

// console.log(employees.size); // 2

// 3.
// let employee1 = { name: 'Jake' };
// let employee2 = { name: 'Janet' };

// let employees = new Map();
// employees.set(employee1, 'ABC');
// employees.set(employee2, '123');

// employees.delete(employee2);
// console.log(employees.size); // 1

// 4.
// let employee1 = { name: 'Jake' };
// let employee2 = { name: 'Janet' };

// let employees = new Map();
// employees.set(employee1, 'ABC');
// employees.set(employee2, '123');

// employees.clear();
// console.log(employees.size); // 0

// 5.
// let employee1 = { name: 'Jake' };
// let employee2 = { name: 'Janet' };

// let arr = [[employee1, 'ABC'], [employee2, '123']];

// let employees = new Map(arr);
// console.log(employees.size); // 2

// 6.
// let employee1 = { name: 'Jake' };
// let employee2 = { name: 'Janet' };

// let arr = [[employee1, 'ABC'], [employee2, '123']];

// let employees = new Map(arr);
// console.log(employees.has(employee2)); // true

// 7.
// let employee1 = { name: 'Jake' };
// let employee2 = { name: 'Janet' };

// let arr = [[employee1, 'ABC'], [employee2, '123']];

// let employees = new Map(arr);

// let list = [...employees.values()]; // spread
// console.log(list);
// ['ABC', '123'];

// 8.
// let employee1 = { name: 'Jake' };
// let employee2 = { name: 'Janet' };

// let arr = [[employee1, 'ABC'], [employee2, '123']];

// let employees = new Map(arr);

// let list = [...employees.entries()];
// console.log(list[0][1]); // ABC

// WEAKMAP, when an item is removed, it is removed from the weakmap
// 9.
// let employee1 = { name: 'Jake' };
// let employee2 = { name: 'Janet' };

// let employees = new WeakMap([[employee1, 'ABC'], [employee2, '123']]);
// // employee1 = null;
// console.log(employees.size); // undefined, big problem with weakMap, same issue if you try to locate an element in a weakMap
