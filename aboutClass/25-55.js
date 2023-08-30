var Animal = (() => {
    function Animal(age, weight) {
        this.age = age;
        this.weight = weight;
    }
    Animal.prototype.eat = () => "eat";
    Animal.prototype.move = () => "move";
    return Animal;
})();

var Bird = (() => {
    function Bird() {
        Animal.apply(this, arguments);
    }

    Bird.prototype = Object.create(Animal.prototype);
    Bird.prototype.constructor = Bird;
    Bird.prototype.fly = () => "fly";
    return Bird;
})();

var bird = new Bird(1, 5);
console.log(bird);
console.log(bird.eat());
console.log(bird.fly());

