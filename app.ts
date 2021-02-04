let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Max';
// userName = userInput;
if (typeof userInput === 'string') {
  userName = userInput;
}

function generateError (message: string, code: number): never {
  throw { message: message, errorCode: code };
  // while (true) {}
}

const result = generateError('An error occured', 500);
console.log('%c custom log', 'color:red;', result);
