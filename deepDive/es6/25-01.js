// var foo = function () {
//     return 1;
// };
// console.log(foo());
// console.log(new foo());
// var obj = { foo };
// console.log(obj.foo());

var obj = {
    x: 10,
    f: function () { return this.x; }
};
console.log(obj.f());
var bar = obj.f;
console.log(bar());