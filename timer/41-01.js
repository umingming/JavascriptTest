const timer = setTimeout(name => console.log(name), 3000, "유미");

console.log(timer)
setTimeout(() => {
    clearTimeout(timer);
}, 200)

let count = 1;
const timerId = setInterval(() => {
    console.log(count);
    if (count++ === 5) clearInterval(timerId);
})