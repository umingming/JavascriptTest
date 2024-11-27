const Person = (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
// Person.prototype = {
//     constructor: Person,
//     sayHello() {
//         console.log(`Hello ${this.name}`);
//     }
// };

const me = new Person('Lee');

const parent = {
    constructor: Person,
    sayHello() {
        console.log(`Hello ${this.name}`);
    }
};
Person.prototype = parent;
Object.setPrototypeOf(me, parent);

console.log(me.__proto__);
console.log(me.constructor === Person);
console.log(me.constructor === Object);