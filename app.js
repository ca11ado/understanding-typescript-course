function add(n1, n2, showResult, phrase) {
    console.log('%c custom log', 'color:red;', typeof number1);
    var result = n1 + n2;
    if (showResult) {
        console.log('%c custom log', 'color:red;', phrase + result);
    }
    else {
        return result;
    }
}
var number1 = 5;
var number2 = 2.8;
var printResult = true;
var resultPhrase = 'Result is: ';
add(number1, number2, printResult, resultPhrase);
