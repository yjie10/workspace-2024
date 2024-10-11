const button = document.querySelector("button")!;
// adding '!' mark indicates this will never be null; 
// using 'as' is a syntax called typecasting
const input1 = document.getElementById("num1")! as HTMLInputElement;
const input2 = document.getElementById("num2")! as HTMLInputElement;

function add(num1: number, num2: number) {
  return num1 + num2;
};

button.addEventListener("click", function () {
  // in JS, the value of an input element is always a string
  console.log(add(+input1.value, +input2.value));
});
