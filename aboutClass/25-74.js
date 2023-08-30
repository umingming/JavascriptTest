class Rectangle {
    constructor(width, height) {
        console.log(this);
        this.width = width;
        this.height = height;
        console.log(new.target);
        console.log(Object.getPrototypeOf(this) === ColorRectangle.prototype);
        console.log(this instanceof ColorRectangle);
        console.log(this instanceof Rectangle);
        console.log(this);
    }

    getArea() {
        return this.width * this.height;
    }
    toString() {
        return `width = ${this.width}, height = ${this.height}`;
    }
}

class ColorRectangle extends Rectangle {
    constructor(width, height, color) {
        super(width, height);
        this.color = color;
        console.log(this);
    }

    toString() {
        return super.toString() + `, color = ${this.color}`;
    }
}

const colorRectangle = new ColorRectangle(2, 4, "red");
// console.log(colorRectangle.getArea());
// console.log(colorRectangle.toString());

// class MyArray extends Array {
//     uniq() {
//         return this.filter((v, i, self) => self.indexOf(v) === i);
//     }

//     average() {
//         return this.reduce((pre, cur) => pre + cur, 0) / this.length;
//     }
// }

// const myArray = new MyArray(1, 1, 2, 3, 1, 5, 2);
// console.log(myArray);
// console.log(myArray.uniq());

// console.log(myArray.filter(i => i % 2) instanceof MyArray);
// console.log(myArray.filter(i => i % 2) instanceof Array);

class MyArray extends Array {
    static get [Symbol.species]() {
        return Array;
    }
    uniq() {
        return this.filter((v, i, self) => self.indexOf(v) === i);
    }
    average() {
        return this.reduce((pre, cur) => pre + cur, 0) / this.length;
    }
}

const myArray = new MyArray(1, 1, 2, 3);
console.log(myArray.uniq() instanceof MyArray);
console.log(myArray.uniq() instanceof Array);