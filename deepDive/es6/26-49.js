// function foo(param, ...rest) {
//     console.log(param);
//     console.log(rest);
// }
// foo(1, 2, 3, 4, 5)

function sum(...args) {
    console.log(arguments);
    var array = Array.prototype.slice.call(arguments);

    return array.reduce(function (pre, cur) {
        return pre + cur;
    }, 0);
}
console.log(sum(1, 2, 3, 4, 5));