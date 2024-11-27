function Person(name) {
    this.name = name;
}

const me = new Person('Lee');
const parent = {
};
Person.prototype = parent;

Object.setPrototypeOf(me, parent);

console.log(me instanceof Person);
console.log(me instanceof Object);
