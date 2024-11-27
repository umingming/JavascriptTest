const Person = (() => {
    let _age = 0;
    function Person(name, age) {
        this.name = name;
        _age = age;
    }

    Person.prototype.sayHi = () => console.log(`${this.name}, ${_age}`);

    return Person;
})();

const me = new Person('Lee', 20);
me.sayHi();
const you = new Person('Lee', 27);
you.sayHi();
console.log(me.name);
console.log(me._age);
me.sayHi();