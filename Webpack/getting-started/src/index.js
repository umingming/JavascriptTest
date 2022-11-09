import _ from 'lodash'; 
// package.json 에서 설정함.

function component() {
    var element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'Webpack'], ' ');
    return element;
}

document.body.appendChild(component());
