const character = 'akif';
// console.log(character);

const inputs = document.querySelectorAll('input');
// inputs.forEach(input => console.log(input));

const circ = (diameter: number) => {
  return diameter * Math.PI;
}
// console.log(circ(9));

let char: string;
let age: number;
let isLoggedIn: boolean;

//age = “luigi";
age = 30;
isLoggedIn = true;


// let ninjas: string[];
// ninjas.push('shaun'); //ERR: Cannot read properties of undefined
let ninjas: string[] = [];
ninjas.push('shaun');

//union types
let mixed: (string|number|boolean)[] = [];
mixed.push('hello');
mixed.push(20);
mixed.push(false);
// console.log('mixed: ', mixed)

let time: any = 25;
time = true;
// console.log(time);
time = 'hello';
// console.log(time);
time = { nane: 'luigi' };
// console.log(time);

let ninja: { name: any, age: any };
ninja = { name: 'yoshi', age: 25 };
ninja = { name: 25, age: 'yoshi' };
// console.log(ninja);

const add = (a: number, b: number, c?: number | string) => { //c parameter is optional
  // console.log(a + b);
}
add(5,10);

const extract = (a: number, b: number, c: number | string = 10) => { //if c has a default value '?' isn't necessary
  // console.log(a - b);
}
extract(10,5);

type StringOrnum = string | number;
type objWithName = { name: string, uid: StringOrnum };

const logDetails = (uid: StringOrnum, item: string) => {
// console.log(`${item} has a uid of ${uid}`);
}

const greet = (user: objWithName) => {
// console.log(`${user.name} says hello`);
}