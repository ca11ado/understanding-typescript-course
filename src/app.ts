const randomAr: Array<string> = ['test'];
console.log(randomAr[0].length);

const promise: Promise<number> = new Promise((resolve) => {
  // reject('test');
  resolve(100);
});

promise
  .then(response => console.log(Number.isFinite(response)))
  .catch(response => console.log(Number.isFinite(response)));

function addRole<T extends object, U extends string>(user: T, role: U) {
  return { ...user, role };
}

const user: object = {
  name: 't0s',
};

const role = 'admin';

console.log(addRole(user, role).role);

interface Lengthy {
  length: number;
}

function countAndPrint<T extends Lengthy>(element: T): [T, string] {
  const length = element.length;
  const description = length > 1
    ? `Got ${length} elements`
    : length === 0 ? 'Empty' : 'Got 1 element';
  
  return [element, description];
}

console.log(countAndPrint('Hi there'));
console.log(countAndPrint(['test']));

class DataStorage<T> {
  private data: Array<T> = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const numberStorage = new DataStorage<string>();
numberStorage.addItem('111');
numberStorage.removeItem('111');
console.log('data storage');
console.log(numberStorage.getItems());
