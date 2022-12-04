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