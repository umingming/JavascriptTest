// var Person = (() => {
//     function Person(name) {
//         this.name = name;
//     }
//     Person.prototype.sayHi = function() {
//         console.log(`hi! i am ${this.name}`);
//     }
//     return Person;
// })();

// var me = new Person("Lee");
// me.sayHi();

// class Person {
//     constructor(name) {
//         this.name = name;
//     }
//     sayHi() {
//         console.log(`hi! i am ${this.name}`);
//     }
//     static sayHello() {
//         console.log("Hello");
//     }
// }
// const me = new Person("이유미");
// console.log(me.name);
// me.sayHi();
// Person.sayHello();

// const Person = "";
// { 
//     console.log(Person);
//     // class Person {}
// }

// class Person {}
// const me = Person();
// console.log(me);

// const Person = class MyClass {};
// // const me = new Person();
// const me = new MyClass();
// console.log(me);

// class Person {
//     constructor(name) {
//         this.name = name;
//         return "KIM";
//     }
// }
// const me = new Person("Lee");
// console.log(me);

// function Person(name) {
//     this.name = name;
// }
// Person.sayHi = () => console.log("Hi!");
// Person.sayHi();

// class Person {
//     constructor(name) {
//         this.name = name;
//     }

//     static sayHi() {
//         console.log("Hi");
//     }
// }
// const me = new Person("Lee");
// me.sayHi();

// class Square {
//     constructor(width, height) {
//         this.width = width;
//         this.height = height;
//     }

//     static area(width, height) {
//         return this.width * this.height;
//     }
// }
// const nemo = new Square(10, 10);
// console.log(Square.area(20, 20));

// class Person {
//     constructor(name) {
//         console.log(this.name);
//         console.log(Object.getPrototypeOf(this) === Person.prototype);
//         this.name = name;
//         console.log(this.name);
//     }
// }
// const me = new Person("이유미");
// console.log(Object.keys(Person));

// const person = {
//     firstName: "Ungmo",
//     lastName: "Lee",

//     get fullName() {
//         return `${this.firstName} ${this.lastName}`;
//     },
//     set fullName(name) {
//       [this.firstName, this.lastName]  = name.split(" ");
//     }
// };
// console.log(`${person.firstName} ${person.lastName}`);
// person.fullName = 'Heegun Lee';
// console.log(person.fullName);
// console.log(Object.getOwnPropertyDescriptor(person, "fullName"));

class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`; 
    }
    set fullName(name) {
        [this.firstName, this.lastName]  = name.split(" ");
    }
}
const me = new Person("Youme", "Lee");
console.log(`${me.firstName} ${me.lastName}`);
console.log(me.fullName);
me.fullName = "유미 이";
console.log(me.fullName);
console.log(Object.getOwnPropertyDescriptor(Person.prototype, "fullName"));