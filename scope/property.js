const person = {
    name: 'Lee',
    age: 20
};

console.log(Object.getOwnPropertyDescriptors(person));

Object.defineProperty(person, 'lastName', {});
let descriptor = Object.getOwnPropertyDescriptor(person, 'lastName');
console.log(descriptor);

console.log(Object.keys(person));
person.lastName = 'Kim';
console.log(person.lastName);

// Object.defineProperty(person, 'lastName', {
// 	value: 'Lee'
// });
//{ value: undefined, writable: false, enumerable: false, configurable: false }


Object.defineProperty(person, 'fullName', {
	get() {
		return `${this.firstName} ${this.lastName}`;
	}
});
console.log(Object.getOwnPropertyDescriptor(person, 'fullName'));

console.log(person);
console.log(Object.getOwnPropertyDescriptors(person));
Object.seal(person);
console.log(Object.getOwnPropertyDescriptors(person));