if (!Array.prototype.forEach2) {
    Array.prototype.forEach2 = function (callback, thisArg) {
        if (typeof callback !== 'function') {
            throw new TypeError(callback + ' is not a function');
        }

        for (var i = 0; i <this.length; i++) {
            callback.call(thisArg, this[i], i, this);
        }
    };
}

[1, 2,3].forEach2(i => console.log(i))