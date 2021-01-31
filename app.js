/*
const person: {
  name: string;
  age: number;
} = {
*/
var person = {
    name: 'Maximilian',
    age: 30,
    hobbiew: ['Sports', 'Cooking'],
    role: [2, 'author']
};
person.role.push('admin');
// person.role[1] = 10;
var favoriteActivities;
favoriteActivities = ['sport'];
console.log('%c custom log', 'color:red;', person);
for (var _i = 0, _a = person.hobbiew; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log('%c custom log', 'color:red;', hobby.toUpperCase());
    // console.log('%c custom log', 'color:red;', hobby.map());
}
