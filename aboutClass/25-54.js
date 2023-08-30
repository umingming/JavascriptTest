class Animal {
    constructor(age, weight) {
        this.age = age;
        this.weight = weight;
    }

    eat = () => "eat";
    move = () => "move";
}

class Bird extends Animal {
    fly = () => 'fiy';
}

const bird = new Bird(1, 5);
// console.log(bird);
// console.log(bird.eat());
// console.log(bird.fly());
// console.log(bird instanceof Bird);
// console.log(bird instanceof Animal);

// function Base(a) {
//     this.a = a;
// }

// class Derived extends Base {}

// const derived = new Derived(1);
// console.log(derived);

function Base1() {}
class Base2 {}
const condition = true;
class Derived extends (condition ? Base1 : Base2) {}
const derived = new Derived();
// console.log(derived);
// console.log(derived instanceof Base1);
// console.log(derived instanceof Base2);

class Fish extends Animal {
    constructor(...args) {
        const [height, ...animal] = args;
        super(...animal);
        this.height = height;
    }
    foo = () => 'foo';
}

const fish = new Fish(3, 1, 5);
console.log(fish.height);
console.log(fish.age);