function PersonDecorator(constructor: Function) {
  console.log('%c custom log', 'color:red;', 'decorator', constructor);
}

@PersonDecorator
class Person {
  name = 'Max';
  constructor() {
    console.log('%c custom log', 'color:red;', 'Creating person...');
  }
}

const person = new Person();
console.log('%c custom log', 'color:red;', person);
