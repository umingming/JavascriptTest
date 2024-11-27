function Person(name) {
    this.name = name;
}

const me = new Person('Lee');
me.sayHello();

Person.prototype.sayHello = function () {
    console.log(`Hi! My name is ${this.name}`);
}
