// import _ from 'lodash'; 
// var _ = require('lodash'); 와 같음
// package.json 에서 설정함.

function component() {
    var element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'Webpack'], ' ');
    // _가 lodash고, 여기서 join이라는 API 사용함.
    return element;
}

document.body.appendChild(component());
