// [1, 2, 3].forEach((item, index, arr) => {
//     console.log(item, index, arr);
// })

// const numbers = [1, 2, 3];
// numbers.forEach((item, index, arr) => { arr[index] = item ** 2;});
// console.log(numbers);

class Numbers {
    numberArray = [];
    multiply(arr) {
        // arr.forEach(function (item) {
        //     this.numberArray.push(item * item);
        // }, this);
        arr.forEach(item => this.numberArray.push(item * item))
    }
}
const numbers = new Numbers();
numbers.multiply([1, 2, 3]);
console.log(numbers.numberArray);

Numbers.prototype.forEach = function (callback, thisArg) {
    if (typeof callback !== 'function') {
        throw new TypeError(callback + ' is not a function');
    }
    for (var i = 0; i < this.numberArray.length; i++) {
        callback.call(thisArg, this.numberArray[i], i, this);
    }
}
numbers.forEach(i => console.log(i))

const numbers2 = [1, 4, 9]
const roots = numbers2.map(item => Math.sqrt(item));
console.log("roots: ", roots);
console.log("numbers: ", numbers2);

numbers2.map((item, index, arr) => {
    console.log(item, index, arr);
    return item;
})

class Prefixer {
    constructor(prefix) {
        this.prefix = prefix;
    }

    add(arr) {
        // return arr.map(function (item) {
        //     return this.prefix + item;
        // }, this);
        return arr.map(item => this.prefix + item);
    }
}

const prefixer = new Prefixer('-webkit-');
console.log(prefixer.add(['transition', 'user-select']));

const result = [1, 2, 3].filter((item, index, arr) => {
    console.log(item, index, arr);
    return item % 2;
})

console.log(result);

class Users {
    constructor() {
        this.users = [
            { id: 1, name: "이유미" },
            { id: 2, name: "엄윤섭" }
        ]
    }
    findById(id) {
        return this.users.filter(user => user.id === id);
    }
    remove(id) {
        this.users = this.users.filter(user => user.id !== id);
    }
}

const users = new Users();
const user = users.findById(1);
console.log(user);
users.remove(1);
console.log(users.findById(1));
