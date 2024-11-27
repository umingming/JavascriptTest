const date = new Date();
// console.log(typeof date);
// console.log(date);

// console.log(Object.getPrototypeOf(date) === Date.prototype);

const num = new Number(1.5);
// console.log(num.toFixed());
// console.log(Number.isInteger(0.5));


// var foo;
// foo = 1;

// bar = 2;

function baz() { return 3; }

// console.log(global.foo);

// console.log(Infinity === global.Infinity);
// console.log(NaN === global.NaN);

// console.log(eval('1+2'));
// console.log(eval('var x = 5;'));

// console.log(x);
// const o = eval('{a:2}');
// const o2 = eval('({a:2})');
// console.log(o);
// console.log(o2);

console.log(eval('1+2; 3+4;'))



const x = 1;
function foo() {
    eval('const x = 2; console.log(x);');
    eval('var x = 3; console.log(x);');
    console.log(x);
}

foo();
console.log(x);