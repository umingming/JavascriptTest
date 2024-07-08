fetch("https://jsonplaceholder.typicode.com/todos/ㅅㄷㅅㄷㄷ")
	.then(res => {
			if (!res.ok) throw new Error(res.statusText);
			return response.json();
	})
	.then(console.log)
	.catch(console.error)