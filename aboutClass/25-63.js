class Base {
    constructor(name) {
        this.name = name;
    }
    static sayHi() {
        return `Hi! I'm ${this.name}`
    }
}

class Derived extends Base {
    // constructor () {
        
    // }
    // constructor(a, b, c) {
    //     super(a, b);
    //     this.c = c;
    // }
    // constructor() {
    //     super();
    //     this.a = 1;
    // }
    static sayHello() {
        return console.log(`${super.sayHi()}. how are you doing?`)
        // const __super = Object.getPrototypeOf(Derived.prototype);
        // return console.log(`${__super.sayHi()}. how are you doing?`)
    }
    // static sayHello = () => {
    //     const __super = Object.getPrototypeOf(Derived.prototype);
    //     return console.log(`${__super.sayHi()}. how are you doing?`)
    // }
}

const dervied = new Derived("유미");
// console.log(dervied.sayHi());
Derived.sayHello();

// const base = {
//     name: "Lee",
//     sayHi() {
//         return `Hi! ${this.name}`;
//     }
// };

// const derived = {
//     __proto__: base,
//     sayHi() {
//         return `${super.sayHi()}. how are you doing?`
//     },
//     sayHello: function() {
//         return `${super.sayHi()}. how are you doing?`
//     }
// }
// console.log(derived.sayHello());