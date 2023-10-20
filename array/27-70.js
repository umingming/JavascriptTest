const todos = [
    { id: 1, content: "열심히 일하기"},
    { id: 2, content: "열심히 공부하기"},
    { id: 3, content: "열심히 밥먹기"}
]

const _todos = todos.slice(1);
console.log(_todos[0] === todos[1]);