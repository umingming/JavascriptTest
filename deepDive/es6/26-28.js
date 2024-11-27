// class Prefixer {
//     constructor(prefix) {
//         this.prefix = prefix;
//     }
//     // add(arr) {
//     //     // const that = this;
//     //     return arr.map(function (item) {
//     //         return this.prefix + item;
//     //     }.bind(this));
//     // }
//     add(arr) {
//         return arr.map(item => this.prefix + item)
//     }
// }

// const prefixer = new Prefixer("-webkit-");
// console.log(prefixer.add(['transition', 'user-select']));

// // // const arrow = () => console.log(this.x);
// // arrow();
// console.log(this.x);
// (function () {
//     return console.log(this.x);;
// }).bind(this);
// (function () {
//     const foo = () => console.log(this);
//     foo();
// }).call({ a: 1 });
// (function () {
//     const bar = () => () => console.log(this);;
//     bar()();
// }).call({a: 1});

// const foo = () => console.log(this);
// foo();

// const counter = {
//     num: 1,
//     increase() {
//         return ++this.num;
//     } 
// }
// console.log(counter.increase());

var x = 1;
const normal = function () { return this.x; };
const arrow = () => this.x;
console.log(normal.call({x: 10}));
console.log(arrow.call({x: 10}));

// function Person(name) {
//     this.name = name;
// }
// // Person.prototype.sayHi = function () { console.log(`Hi ${this.name}`) };
// Person.prototype = {
//     constructor: Person,
//     sayHi() {
//         console.log(`Hi ${this.name}`);
//     }
// }

// class Person {
//     name = "Lee";
//     sayHi = () => console.log(`Hi ${this.name}`);
// }
// const person = new Person("Lee");
// person.sayHi();

class Base {
    constructor(name) {
        this.name = name;
    }
    sayHi() {
        return `Hi! ${this.name}`;
    }
}

class Derived extends Base {
    sayHi = () => `${super.sayHi()} how are you doing?`
}

const derived = new Derived("Lee");
console.log(derived.sayHi());

(function () {
    const foo = () => console.log(arguments);
    foo(3, 4);
}(1, 2));

const foo = () => console.log(arguments);
foo(1, 2);

class Prefixer {
	constructor(prefix) {
		this.prefix = prefix;
	}
	add(arr) {
		return arr.map(function (item) {
			return this.prefix + item; //TypeError
		}.bind(this));
	}
}
const prefixer = new Prefixer("test");
console.log(prefixer.add(["check"]));