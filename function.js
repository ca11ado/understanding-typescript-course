"use strict";
function add(n1, n2) {
    return n1 + n2;
}
function print(number) {
    console.log('Result: ', +number);
}
function printResult(number) {
    console.log('Result: ', +number);
    return;
}
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
print(add(5, 12));
var combineValues;
combineValues = add;
combineValues = printResult;
// combineValues = 5;
console.log(combineValues(8, 8));
addAndHandle(10, 20, function (result) {
    console.log('%c custom log', 'color:red;', result);
    return result;
});
