const arr = [1, 2, 3, 4];
// const result = arr.splice(1, 1, 100);
// console.log(arr);
// console.log(result);

function remove(array, item) {
    const index = array.indexOf(item);
    if (index !== -1) array.splice(index, 1);
    return array;
}

console.log(remove(arr, 2));
console.log(remove(arr, 10));

