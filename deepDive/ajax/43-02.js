const obj = {
    name: "이유미",
    age: undefined,
    alive: true,
    hobby: ["책읽기", "수영", "클라이밍", "개발"] 
}
function filter(key, value) {
    return typeof value === 'number' ? undefined : value;
}

console.log(JSON.stringify(obj, filter, 2));