function sum() {
    var arr = Array.prototype.slice.call(arguments);
    console.log(arr);

    return arr.reduce(function (pre, cur) {
        return pre + cur;
    }, 0);
}

console.log(sum(1, 2, 3));

function sum2() {
    const arr = Array.from(arguments);
    console.log(arr);

    return arr.reduce((pre, cur) => pre + cur, 0);
}

console.log(sum2(1, 2, 3));

function sum3() {
    const arr = [ ...arguments ];
    console.log(arr);

    return arr.reduce((pre, cur) => pre + cur, 0);
}

console.log(sum3(1, 2, 3));

const arr = [1, 2, 3];
const result = arr.reverse();

// console.log(arr);
// console.log(result);

// arr.fill(0);
// console.log(arr);

// arr.fill(1, 0, 1);
// console.log(arr);

// const seq = (length = 0) => Array.from({ length }, (_, i) => i);
// console.log(seq(3));

console.log(arr.includes(3, 1));

console.log([NaN].indexOf(NaN));

const multipleArr = [1, [2, [3, [4]]]];
console.log(multipleArr.flat());
console.log(multipleArr.flat().flat());
console.log(multipleArr.flat(2));
console.log(multipleArr.flat(Infinity));

const todos = [
    { id: 4, content: 'JavaScript' },
    { id: 1, content: 'HTML' },
    { id: 2, content: 'CSS' },
];

function compare(key) {
    return (a, b) => (a[key] > b[key] ? 1 : (a[key] < b[key] ? -1 : 0));
}

todos.sort(compare('id'));
console.log(todos);

todos.sort(compare('content'));
console.log(todos);
