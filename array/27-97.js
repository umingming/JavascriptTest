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