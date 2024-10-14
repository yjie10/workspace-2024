### 12. Using Types

@proj-setup

Core Types That JS already knows and TypeScript also supports:

- number - `1, 5.3, -10`
- string - `'Hi', "Hi"`
- boolean - `true, false`

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

### 17. Object Types

@proj-setup

Core Types That JS already knows and TypeScript also supports:

- number
- string
- boolean
- object - `{age: 30}`

object: any JS object, more specific types (type of object) are possible.

### 18. Nested Objects & Types

Notes from the course.

`const product = {
id: 'ss004',
price: 2222,
tags: ['rank-b', 'space-atk'],
details: {
title: 'SS-004',
description: '##1 - in observation'
}

// type of above object would be:
{
id: string;
price: number;
tags: string[];
details: {
title: string;
description: string;
}
}
}`

### 19. Array Types

Core Types That JS already knows and TypeScript also supports:

@proj-setup

- number
- string
- boolean
- object - `{age: 30}`
- Array - `[1, 2, 3]`

Array: Any JS array, type can be flexible or strict (regarding the element types).

### 20. Working with Tuples

@proj-setup

Core Types vanilla JS doesn't know but supported by TS:

- Tuple - `[1, 2]`

Tuple: NEW - Fixed-length and Fixed-type array.

Good to use if you have a scenario: where you need exactly X amount of values (length) in an array and you know the type of each value in advance.

### 21. Working with Enums

@proj-setup

Core Types vanilla JS doesn't know but supported by TS:

- Tuple
- Enum - `enum {LABEL1, LABEL2}`

Enum: NEW - Automatically enumerated global constant identifiers.

Often, enums are defined with all-uppercase values but that's not a must-do.

Default behavior is starting at zero, but not restricted to numbers, can use strings as well.

### 22. The "any" Type
