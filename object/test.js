let arr = [1, 2, 3];
arr.top = function () {
    return arr[arr.length - 1];
};

console.log(arr.top());

// function top() {
//     return this[this.length - 1];
// }