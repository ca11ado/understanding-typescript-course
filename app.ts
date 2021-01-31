/*
const person: {
  name: string;
  age: number;
} = {
*/
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
