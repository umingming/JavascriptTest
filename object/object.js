let object = {
    a: "A",
    b: "B"
};

function getObject(name) {
    return {
        a: object[`a`],
        name: name
    }
}

let yumi = getObject("yumi");
console.log(yumi.a);