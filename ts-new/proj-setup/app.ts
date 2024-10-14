/* 12. Using Types
function add(n1: number, n2: number) {
  return n1 + n2;
}

const number1 = 5;
// const number2 = '2.8'; sum1 will throw an error because number2 is not a number
const number2 = 2.8;

const sum1 = add(number1, number2);
console.log(typeof(sum1)); 
*/

/* 15. Working with Numbers, Strings and Booleans
function add(n1: number, n2: number, printResult: boolean, message: string) {
  const sum = n1 + n2;
  if (printResult) {
    console.log(message + sum);
  } else {
    return sum;
  }
}

const number1 = 5;
// const number2 = '2.8'; sum1 will throw an error because number2 is not a number
const number2 = 2.8;
const printResult = true;
const sumMessage = `${number1} + ${number2} is: `

const output = add(number1, number2, printResult, sumMessage);
*/

/* 17. Object Types

// not key-value but key-type pairs here: 
const person = {
  name: 'yori',
  age: 19
};

// more specific - NOT PREFERRED
const personSpecific: {
  name: string;
  age: number;
} = {
  name: 'yori',
  age: 19
}
// but it is better to let TS infer this

console.log(person);

*/

/* 19. Arrays Types

const person = {
  name: 'yori',
  age: 19,
  hobbies: ['Singing', 'Writing', 'Reading']
}

// (property) hobbies: string[] - string array, an array of data

let favoriteActivities: string[];

// mixed array: :any[], but loses the advantage of using TS, it's like JS now since anything is allowed

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase()); // TS knows hobby is a string and therefore can use string methods without errors 
};

*/

/* 20. Working with Tuples

const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string]; // tuple - exactly two elements with number followed by a string
} = {
  name: 'yori',
  age: 19,
  hobbies: ['Singing', 'Writing', 'Reading'],
  role: [2, 'swe']
}

// the below would be allowed, but not ideal
// person.role.push('admin')
// person.role[1] = 10;

// push is allowed for a type tuple, unfortunately TS can't catch this error
// person.role.push('admin')

*/

// 21. Working with Enums

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

// assigns labels to numbers; labels that are human readable and have some values mapped behind the scenes
enum Role { ADMIN, READ_ONLY, AUTHOR };

const person = {
  name: 'yori',
  age: 19,
  hobbies: ['Singing', 'Writing', 'Reading'],
  // role: ADMIN
  role: Role.ADMIN
}

// and we can check
// if (person.role === ADMIN) {
//   console.log('is an admin');
// }

if (person.role === Role.AUTHOR) {
  console.log('is an author');
}



