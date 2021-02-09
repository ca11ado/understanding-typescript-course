"use strict";
var button = document.querySelector('button');
if (button) {
    button.addEventListener('click', function () {
        console.log('%c custom log', 'color:red;', 'button click');
    });
}
//# sourceMappingURL=app.js.map