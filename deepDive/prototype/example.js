const parent = {};
const child = {};
child.__proto__ = parent;

const obj = Object.create(null);
console.log(obj.__proto__);
console.log(Object.getPrototypeOf(obj));

Object.setPrototypeOf(obj, parent);
console.log(Object.getPrototypeOf(obj));

console.log((function () {}).hasOwnProperty('prototype'));
console.log(({}).hasOwnProperty('prototype'));

console.log((num => { this.num = num }).hasOwnProperty('prototype'));
console.log(({foo(){}}).hasOwnProperty('prototype'));