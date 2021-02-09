"use strict";
var logged;
function sendAnalytics(data) {
    console.log('%c custom log', 'color:red;', data);
    logged = true;
}
sendAnalytics('The data');
//# sourceMappingURL=analytics.js.map