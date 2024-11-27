// console.log(Object.getOwnPropertyDescriptors(["string", 2, 3, null, true, [], {}]));

// const arr = [];
// console.time("Array Performance Test");
// for(let i = 0; i < 100000000; i++) {
//     arr[i] = i;
// }
// console.timeEnd("Array Performance Test");

// const obj = {};
// console.time("Object Performance Test");
// for(let i = 0; i < 100000000; i++) {
//     obj[i] = i;
// }
// console.timeEnd("Object Performance Test");


const arr = [1, 2, 5, 3];
arr.length = 3;
console.log(arr);
arr.length = 6;
console.log(arr);
console.log(arr.length);
console.log(Object.getOwnPropertyDescriptors(arr));