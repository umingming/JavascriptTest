class Person {
    #name = "Lee";
    constructor(name) {
        this.#name = name;
    }
    hello() {
        console.log(`Hello! Im ${this.#name}`);
    }
}

const me = new Person("Lee");
me.hello();

class MyMath {
    static PI = 22 / 7;
    static #num = 10;

    static increment() {
        return ++MyMath.#num;
    }
    get num() {
        return MyMath.#num;
    }
}
const math = new MyMath();
console.log(math.num);
console.log(MyMath.increment());
console.log(math.num);