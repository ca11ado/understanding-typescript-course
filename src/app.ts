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
