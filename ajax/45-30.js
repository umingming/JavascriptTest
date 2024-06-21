const requestData1 = () => 
    new Promise(resolve => setTimeout(() => resolve(1), 3000));
const requestData2 = () => 
    new Promise(resolve => setTimeout(() => resolve(2), 2000));
const requestData3 = () => 
    new Promise(resolve => setTimeout(() => resolve(3), 1000));

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
    })
    .catch(console.error)

Promise.race([
    new Promise(resolve => setTimeout(() => resolve(1), 3000)),
    new Promise(resolve => setTimeout(() => resolve(2), 2000)),
    new Promise(resolve => setTimeout(() => resolve(3), 1000)),
])
    .then(data => console.log(data))