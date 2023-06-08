// const x = 1;

// const innerFunc = (() => {
//     const x = 10;
//     const inner = () => console.log(x);
//     return inner;
// })();

// innerFunc();
// const counter = (() => {
// 	let num = 0;
// 	return {
//         increase: () => ++num,
//         decrease: () => num > 0 ? --num : 0,
//     }
// })();
// console.log(counter.increase());
// console.log(counter.decrease());
// console.log(counter.decrease());
// console.log(counter.decrease());
// console.log(counter.decrease());
// console.log(counter.increase());

// const Counter = (() => {
//     let num = 0;
//     function Counter() {}
//     Counter.prototype.increase = () => ++num;
//     Counter.prototype.decrease = () => num > 0 ? --num : 0;
//     return Counter;
// })();
// const counter2 = new Counter();
// console.log(counter2.increase());
// console.log(counter2.decrease());
// console.log(counter2.decrease());
// console.log(counter2.decrease());
// console.log(counter2.decrease());
// console.log(counter2.increase());

// function makeCounter(aux) {
//     let counter = 0;
//     return () => counter = aux(counter);
// }

function increase(n) {
    return ++n;
}
function decrease(n) {
    return --n;
}
// const increaser = makeCounter(increase);
// const decreaser = makeCounter(decrease);
// console.log(increaser());
// console.log(increaser());
// console.log(increaser());
// console.log(decreaser());
function increase(n) {
    return ++n;
}
const counter = ((aux) => {
    let counter = 0;
    return () => counter = aux(counter);
})();

console.log(counter(increase));
console.log(counter(increase));
console.log(counter(increase));
console.log(counter(decrease));