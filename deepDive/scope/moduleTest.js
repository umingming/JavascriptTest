var Num = (function () {
    var num = 1;
    return {
        increase() {
            return ++num;
        },
        decrease() {
            return --num;
        }
    };
}());

var num1 = Num;
var num2 = Num;

console.log(num1.increase());
console.log(num1.increase());
console.log(num1.increase());
console.log(num1.increase());
console.log(num2.num);
console.log(num2.increase());
