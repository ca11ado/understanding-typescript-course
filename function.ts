function add(n1: number, n2: number): number {
  return n1 + n2;
}

function print(number: number): void {
  console.log('Result: ', + number);
}

function printResult(number: number): undefined {
  console.log('Result: ', + number);
  return;
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

print(add(5, 12));

let combineValues: (a: number, b: number) => number;

combineValues = add;
combineValues = printResult;
// combineValues = 5;

console.log(combineValues(8, 8));

addAndHandle(10, 20, (result) => {
  console.log('%c custom log', 'color:red;', result);
  return result;
});
