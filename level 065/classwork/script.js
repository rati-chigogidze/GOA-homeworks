// 1

const PI = 3.14;
// PI = 3.14159; // This will throw an error: TypeError: Assignment to constant variable.
console.log(PI);

// 2

let age = 14; 
console.log(age); 
age = 14; 
console.log(age);

// 3
const favoriteColor = 'Blue';

console.log(favouiritecolor);

// 4

let temp = 30;
if (temp >= 25) {
  console.log('Temperature is above or equal to 25');
}

// 5

let str = 'Hello, world!';
console.log(str.length); // Logs 13

// 6


let password = 'securepass';

if (password.length >= 8) {
  console.log('Password is strong');
}

// 7

let firstName = 'Rati';
let lastName = 'Chigogidze';
let fullName = firstName + ' ' + lastName;
console.log(fullName); // Logs 'Rati Chigogidze'

// 8

let isRaining = false;
if (isRaining) {
  console.log('Take an umbrella!');
}

// 9


let score = 50;
if (score !== 100) {
  console.log('Score is not 100');
}
