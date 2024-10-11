### 12. Using Types

@proj-setup

Core Types That JS already knows and TypeScript also supports:

- number
- string
- boolean

number: All numbers, no differentiation between integers or floats.
string: All text values.
boolean: true, false.

**TypeScript's type system only helps during development (i.e. before the code gets compiled).**

### 13. TS Types vs. JS Types

JS: **dynamically** typed, the type of a var can change during runtime.
TS: **statically** typed, the type of the vars and paramaters are set during development.

### 15. Working with Numbers, Strings and Booleans

@proj-setup

### 16. Type Assignment & Type Inference

`variable1: number, variable2: boolean`

The `: type` is a syntax that is added by TS, it is not part of compiled JS code and not supported by JS.

`// why don't we have ': type' here? Because of _type inference_. 
const number1 = 5; // understands number1 will always be a number
const number2 = 2.8;
const printResult = true;
const sumMessage =`${number1} + ${number2} is: `
`
