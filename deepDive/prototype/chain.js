function Person(name) {
    this.name = name;
}

Person.prototype.sayHello = function () {
    console.log(`Hi! My name is ${this.name}`);
};

const me = new Person('Lee');
me.sayHello();

delete me.sayHello;
me.sayHello();

delete Person.prototype.sayHello;
me.sayHello();
