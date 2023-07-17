"use strict";
const character = 'akif';
// console.log(character);
const inputs = document.querySelectorAll('input');
// inputs.forEach(input => console.log(input));
const circ = (diameter) => {
    return diameter * Math.PI;
};
// console.log(circ(9));
let char;
let age;
let isLoggedIn;
//age = “luigi";
age = 30;
isLoggedIn = true;
// let ninjas: string[];
// ninjas.push('shaun'); //ERR: Cannot read properties of undefined
let ninjas = [];
ninjas.push('shaun');
//union types
let mixed = [];
mixed.push('hello');
mixed.push(20);
mixed.push(false);
// console.log('mixed: ', mixed)
let time = 25;
time = true;
// console.log(time);
time = 'hello';
// console.log(time);
time = { nane: 'luigi' };
// console.log(time);
let ninja;
ninja = { name: 'yoshi', age: 25 };
ninja = { name: 25, age: 'yoshi' };
// console.log(ninja);
const add = (a, b, c) => {
    // console.log(a + b);
};
add(5, 10);
const extract = (a, b, c = 10) => {
    // console.log(a - b);
};
extract(10, 5);
const logDetails = (uid, item) => {
    // console.log(`${item} has a uid of ${uid}`);
};
const greet = (user) => {
    // console.log(`${user.name} says hello`);
};
