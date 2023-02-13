const uri = 'http://example.com?name=이웅모&job=programmer&teacher';
const enc = encodeURI(uri);
// console.log(enc);
const dec = decodeURI(enc);
// console.log(dec);

const uriComp = 'name=이웅모&job=programmer&teacher';
let enc2 = encodeURIComponent(uriComp);
console.log(enc2);

let dec2 = decodeURIComponent(enc2);
console.log(dec2);


var x = 10;
y = 20;
console.log(x);
console.log(y);

delete x;
delete y;
console.log(x);
console.log(y);

