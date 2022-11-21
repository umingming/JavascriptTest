function getThisBinding() {
    console.log(arguments);
    return this;
}

const thisArg = { a: 1 };
console.log(getThisBinding());
console.log(getThisBinding.apply(thisArg, [1, 2, 3]));
console.log(getThisBinding.call(thisArg, [1, 2, 3]));


function convertArgsToArray() {
    console.log(arguments);
    const arr = Array.prototype.slice.call(arguments);
    console.log(arr);
    for (let i of arr) {
        console.log(i);
    }
    return arr;
}

convertArgsToArray(1, 2, 3)

console.log(getThisBinding.bind(thisArg));
console.log(getThisBinding.bind(thisArg)());