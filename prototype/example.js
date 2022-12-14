const parent = {};
const child = {};
child.__proto__ = parent;

const obj = Object.create(null);
console.log(obj.__proto__);
console.log(Object.getPrototypeOf(obj));

Object.setPrototypeOf(obj, parent);
console.log(Object.getPrototypeOf(obj));