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