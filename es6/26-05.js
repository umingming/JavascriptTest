const obj = {
    x: 1,
    //메서드
    foo() {
        return this.x;
    },
    //일반 함수
    bar: function() { 
        return this.x; 
    }
}
// console.log(obj.foo())
// console.log(obj.bar())
// console.log(new obj.bar())
// console.log(obj.foo.hasOwnProperty('prototype'))
// console.log(obj.bar.hasOwnProperty('prototype'))

// console.log(String.prototype.toUpperCase.prototype);
// console.log(String.fromCharCode.prototype);
// console.log(Number.prototype.toFixed.prototype);
// console.log(Number.isFinite.prototype);

const base = {
    name: "Lee",
    sayHi() {
        return `Hi! ${this.name}`;
    }
}
const derived = {
    __proto__: base,
    // sayHi() {
    //     return `${super.sayHi()}. how are you doing?`
    // }
    sayHi: function() {
        return `${super.sayHi()}. how are you doing?`
    }
};
console.log(derived.sayHi());