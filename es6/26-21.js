const person = (name => ({
    sayHi() {
        return `Hi? My name is ${name}.`;
    }
}))("Lee");

console.log(person.sayHi());

const Foo = () => {};
// new Foo();
console.log(
    Foo.hasOwnProperty('prototype')
);