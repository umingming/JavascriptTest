var funcs = [];
for (let i = 0; i < 3; i++) {
    // funcs[i] = ((id) => () => id)(i);
    funcs[i] = () => i;
}

for (var j = 0; j < funcs.length; j++) {
    console.log(funcs[j]());
}

const funcs2 = Array.from(new Array(3), (_, i) => () => i);
console.log(funcs2[2]());