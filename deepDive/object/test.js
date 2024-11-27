let arr = [1, 2, 3];
arr.top = function () {
    return arr[arr.length - 1];
};

let num = [10, 20, 30];
// console.log(arr.top());

// function top() {
//     return this[this.length - 1];
// }

function getInfo(name) {
    return {
        AGE: num[10],
        NUM: num,
        get NUM() {
            return num;
        },
        set NUM(arr) {
            num = arr;
        }
    }
}

let num2 = getInfo("유미");
console.log(num2.NUM);
num2.NUM = [1, 2, 3]

console.log(num2.NUM);
console.log(num2["NUM"]);
console.log(getInfo("유미").NUM);
console.log(getInfo("유진").NUM);
console.log(num);