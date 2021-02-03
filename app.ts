type Combinable = number | string;
type ConversionDescription = 'as-number' | 'as-text';

function combine(input1: Combinable, input2: Combinable, resultConversion: ConversionDescription) {
  let result;
  if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result.toString();
}

const combineAges = combine(30, 26, 'as-number');
console.log('%c custom log', 'color:red;', combineAges);

const combineStringAges = combine('30', '26', 'as-number');
console.log('%c custom log', 'color:red;', combineStringAges);

const combineNames = combine('Max', 'Anna', 'as-text');
console.log('%c custom log', 'color:red;', combineNames);
