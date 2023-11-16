class Stack {
    #array;

    constructor(array = []) {
        if (!Array.isArray(array)) {
            throw new TypeError(`${array} is not an array.`);
        }
        this.#array = array;
    }

    push(value) {
        return this.#array.push(value);
    }
    pop() {
        return this.#array.pop();
    }
    entries() {
        return [...this.#array];
    }
}

const stack = new Stack([1, 2]);
const entries = stack.entries();
entries.pop();
console.log(entries);
console.log(stack.entries());

class Queue {
    #array;

    constructor(array = []) {
        if (!Array.isArray(array)) {
            throw new TypeError(`${array} is not an array.`);
        }
        this.#array = array;
    }

    enqueue(value) {
        return this.#array.push(value);
    }
    dequeue() {
        return this.#array.shift();
    }
    entries() {
        return [...this.#array];
    }
}

const queue = new Queue([1, 2]);
queue.enqueue(3);
console.log(queue.entries());
queue.dequeue();
console.log(queue.entries());