// const resolvePromise = Promise.resolve([1, 2, 3]);
const resolvePromise = new Promise(resolve => resolve([1, 2, 3]));
resolvePromise.then(console.log);

const rejectedPromise = Promise.reject(new Error('Error!'));
rejectedPromise.catch(console.error);

