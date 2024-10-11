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
function add(n1, n2, printResult, message) {
    if (printResult) {
        var sum_1 = n1 + n2;
        console.log(message + sum_1);
    }
    else {
        return n1 + n2;
    }
}
var number1 = 5;
// const number2 = '2.8'; sum1 will throw an error because number2 is not a number
var number2 = 2.8;
var printResult = true;
var sumMessage = "".concat(number1, " + ").concat(number2, " is: ");
var sum = add(number1, number2, printResult, sumMessage);
