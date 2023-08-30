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
console.log(bird);
console.log(bird.eat());
console.log(bird.fly());
console.log(bird instanceof Bird);
console.log(bird instanceof Animal);