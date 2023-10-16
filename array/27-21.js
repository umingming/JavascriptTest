// const arr = new Array("test");
// console.log(arr);

// const arr2 = Array.of(1);
// console.log(arr2);

// const arr3 = Array.from("Hello");
// console.log(arr3);

// const arr4 = Array.from({length: 3}, (_, i) => i);
// console.log(arr4);

const arrayLike = {
    '0': "이유미",
    '1': "이혜인",
    length: 2,
}
// console.log(Array.from(arrayLike));

const obj = {
    '0': '이유미',
    '3': '이혜인'
}

for (const value of arrayLike) {
    console.log(value);
}