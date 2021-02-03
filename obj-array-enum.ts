/*
const person: {
  name: string;
  age: number;
} = {
*/
/*
const person : {
  name: string;
  age: number;
  hobbiew: string[],
  role: [number, string];
} = {
  name: 'Maximilian',
  age: 30,
  hobbiew: ['Sports', 'Cooking'],
  role: [2, 'author'],
};
*/

/*
const ADMIN = 0;
const READ_ONLY = 1;
const AUTHOR = 2;
*/

enum Role { ADMIN = 5, READ_ONLY, AUTHOR };

const person = {
  name: 'Maximilian',
  age: 30,
  hobbiew: ['Sports', 'Cooking'],
  role: Role.ADMIN,
};

// person.role.push('admin');
// person.role[1] = 10;

// person.role = [0, 'admin', 'user'];

let favoriteActivities: string[];
favoriteActivities = ['sport'];

console.log('%c custom log', 'color:red;', person);

for (const hobby of person.hobbiew) {
  console.log('%c custom log', 'color:red;', hobby.toUpperCase());
  // console.log('%c custom log', 'color:red;', hobby.map());
}

if (person.role === Role.AUTHOR) {
  console.log('%c custom log', 'color:red;', 'adimn');
}
