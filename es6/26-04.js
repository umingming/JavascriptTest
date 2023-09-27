// const items = [1, 2, 3].map(function (item) {
//     return item * 2;
// });

// console.log([1, 2, 3].__proto__);
// console.log(items.__proto__);

const base = {
	name: "Lee",
	sayHi: function() {
		return `Hi! ${this.name}`;
	}
}
const derived = {
	__proto__: base,
	sayHi() {
		return `${super.sayHi()}. how are you doing?`;
	}
}
console.log(derived.sayHi())