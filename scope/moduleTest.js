function getNum() {
    var num = 1;
    return {
        increase() {
            return ++num;
        },
        decrease() {
            return --num;
        }
    };
}

var num1 = getNum();
var num2 = getNum();

console.log(num1.increase());
console.log(num1.increase());
console.log(num1.increase());
console.log(num1.increase());
console.log(num2.num);
console.log(num2.increase());
