const request = {
    get(url) {
        return fetch(url);
    },
    post(url, payload) {
        return fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });
    },
    patch(url, payload) {
        return fetch(url, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        })
    },
    delete(url) {
        return fetch(url, {
            method: 'DELETE'
        });
    }
}

// Get
request.get("https://jsonplaceholder.typicode.com/todos/1")
    .then(response => {
        if (!response.ok) throw new Error(response.statusText);
        return response.json();
    })
    .then(console.log)
    .catch(console.error)

const newTodo = { userId: 6, title: 'New Todo', completed: false };
fetch("https://jsonplaceholder.typicode.com/todos", {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(newTodo)
}).then(response => {
        if (!response.ok) throw new Error(response.statusText);
        return response.json();
    })
    .then(console.log)
    .catch(console.error)

fetch("https://jsonplaceholder.typicode.com/todos/1", {
    method: 'PATCH',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ completed: true })
}).then(response => {
        if (!response.ok) throw new Error(response.statusText);
        return response.json();
    })
    .then(console.log)
    .catch(console.error)
    
    