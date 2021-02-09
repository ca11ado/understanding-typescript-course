"use strict";
var button = document.querySelector('button');
function clickHandler(message) {
    console.log('%c custom log', 'color:red;', 'click', message);
}
if (button) {
    button.addEventListener('click', clickHandler.bind(null, 'you r welcome'));
}
//# sourceMappingURL=app.js.map