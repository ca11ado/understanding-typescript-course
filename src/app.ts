const storedValidators: any = {

};

function PersonDecorator(constructor: Function) {
  console.log('%c custom log', 'color:red;', 'decorator', constructor);
}

function NameValidation(target: any, propName: string) {
  console.log('%c custom log', 'color:red;', 'NameValidation', target, propName);
  const constructorName = target.constructor.name;
  const existingValidators = storedValidators[constructorName] || [];
  storedValidators[constructorName] = [
    ...existingValidators,
    (instance: any) => instance[propName].length > 0,
  ];
}

function KirillValidation(target: any, propName: string) {
  const constructorName = target.constructor.name;
  const existingValidators = storedValidators[constructorName] || [];
  storedValidators[constructorName] = [
    ...existingValidators,
    (instance: any) => instance[propName] !== 'Kirill',
  ];
}

function validate(instance: any): boolean {
  console.log('%c custom log', 'color:red;', 'validate');
  console.log('%c custom log', 'color:red;', instance, instance.constructor.name);
  console.log('%c custom log', 'color:red;', storedValidators);
  if (storedValidators[instance.constructor.name]) {
    const validated = storedValidators[instance.constructor.name]
      .map((validator: Function) => validator(instance));
      console.log('%c custom log', 'color:red;', 'validated', validated);
    return validated.every(Boolean);
  }

  return true;
}

@PersonDecorator
class Person {
  n: String;
  constructor(n: String) {
    this.n = n;
    console.log('%c custom log', 'color:red;', 'Creating person...');
  }

  @KirillValidation
  @NameValidation
  get name() {
    return this.n;
  }
}

const person = new Person('Kirill');
validate(person);
console.log('%c custom log', 'color:red;', person);
