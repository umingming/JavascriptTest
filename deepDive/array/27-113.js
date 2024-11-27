const sum = [1, 2, 3, 4].reduce((acc, cur, index, arr) => acc + cur, 0)
console.log(sum);

const values = [1, 2, 3, 4, 5, 6];
const average = values.reduce((acc, cur, _, { length }) => {
    return acc + cur / length;
}, 0);

console.log(average);

const fruits = ['banana', 'apple', 'orange', 'orange', 'apple'];
const count = fruits.reduce((acc, cur) => {
    acc[cur] = (acc[cur] || 0) + 1;
    return acc;
}, {})
console.log(count);

const numbers = [1, [2, 3], 4, [5, 6]];
const flatten = numbers.reduce((acc, cur) => acc.concat(cur), []);
console.log(flatten);
console.log(numbers.flat(Infinity));

values.push(3, 6, 3)
console.log(values);

const valueSet = values.reduce((unique, value, i, _values) => _values.indexOf(value) === i ? [...unique, value] : unique, []);
console.log(valueSet);

const valueSet2 = values.filter((value, i, _values) => _values.indexOf(value) === i);
console.log(valueSet2);

const valueSet3 = new Set(values);
console.log(valueSet3);
console.log([...valueSet3]);

const products = [
    { id: 1, price: 100},
    { id: 2, price: 200},
    { id: 3, price: 300},
]

const priceSum = products.reduce((acc, cur) => acc + cur.price, 0);
console.log(priceSum);

const users = [
    { id: 1, name: 'Lee' },
    { id: 2, name: 'Kim' },
    { id: 2, name: 'Choi' },
]

console.log(users.findIndex(user => user.id === 2));

function predicate(key, value) {
    return item => item[key] === value;
}

console.log(users.findIndex(predicate('name', 'Kim')));

const arr = ['hello', 'world'];
console.log(arr.map(x => x.split('')).flat());
console.log(arr.flatMap(x => x.split('')));