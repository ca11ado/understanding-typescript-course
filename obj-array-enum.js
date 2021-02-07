"use strict";
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
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 5] = "ADMIN";
    Role[Role["READ_ONLY"] = 6] = "READ_ONLY";
    Role[Role["AUTHOR"] = 7] = "AUTHOR";
})(Role || (Role = {}));
;
var person = {
    name: 'Maximilian',
    age: 30,
    hobbiew: ['Sports', 'Cooking'],
    role: Role.ADMIN,
};
// person.role.push('admin');
// person.role[1] = 10;
// person.role = [0, 'admin', 'user'];
var favoriteActivities;
favoriteActivities = ['sport'];
console.log('%c custom log', 'color:red;', person);
for (var _i = 0, _a = person.hobbiew; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log('%c custom log', 'color:red;', hobby.toUpperCase());
    // console.log('%c custom log', 'color:red;', hobby.map());
}
if (person.role === Role.AUTHOR) {
    console.log('%c custom log', 'color:red;', 'adimn');
}
