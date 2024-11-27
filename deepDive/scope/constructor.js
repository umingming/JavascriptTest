function foo() {
    console.log(this);
}

foo();
const obj = { foo };
obj.foo();
const inst = new foo();

function Circle(radius) {
	if(!new.target) {
		return new Circle(radius);
	}
	this.radius = radius;
}
const circle = Circle(5);
console.log(circle.radius);

const bool1 = new Boolean('true');
const bool2 = Boolean('true');
console.log(bool1);

console.log(bool2);