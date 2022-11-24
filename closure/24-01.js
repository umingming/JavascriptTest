const x = 1;
// function outerFunc() {
//     const x = 10;

//     function innerFunc() {
//         console.log(x);
//     }

//     innerFunc();
// }

function outerFunc() {
    const x = 10;
    innerFunc();
}

function innerFunc() {
    console.log(x);
}

outerFunc();


function foo() {
    const x = 10;

    bar();
}

function bar() {
    console.log(x);
}

foo();
bar();