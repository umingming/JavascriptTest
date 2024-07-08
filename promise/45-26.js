const resolvedPromise = Promise.resolve([1, 2, 3]);
resolvedPromise.then(console.log)

const resolvedPromise2 = new Promise(resolve => resolve([1, 2, 3]));
resolvedPromise2.then(console.log)

// const rejectedPromise = Promise.reject(new Error('Error!'));
// rejectedPromise.catch(console.log)

const requestData1 = () => new Promise(resolve => setTimeout(() => resolve(1), 3000));
const requestData2 = () => new Promise(resolve => setTimeout(() => resolve(2), 2000));
const requestData3 = () => new Promise(resolve => setTimeout(() => resolve(3), 1000));

const res = [];
requestData1()
    .then(data => {
        res.push(data);
        return requestData2();
    })
    .then(data => {
        res.push(data);
        return requestData3();
    })
    .then(data => {
        res.push(data);
        console.log("result", res);
    })
    .catch(console.error);
console.log("res", res)

Promise.all([requestData1(), requestData2(), requestData3()])
    .then(res => console.log("res All", res))

Promise.race([requestData1(), requestData2(), requestData3()])
    .then(res => console.log("race", res))
Promise.allSettled([requestData1(), requestData2(), requestData3()])
    .then(res => console.log("allSettled", res))

setTimeout(() => console.log(1));

Promise.resolve()
    .then(() => setTimeout(() => console.log(2)))
    .then(() => console.log(3));

console.log(4);