### 2. What is Typescript?

- A JavaScript Superset.
- A Language building up on JS.
- Adds new Features + Advantages to JS. It makes writing JS code easier and more powerful.
- TS can't be executed by JS environments like the browsers. Features are complied to JS "workarounds."

### 2. Why TypeScript?

Catch unwanted behaviors like the following during development:

```
JavaScript

function add(num1, num2) {
  return num1 + num2;
}

// Unwanted behavior at runtime
console.log(add('2', '3)); // '23' instead of 5 - a concatenated string of the two numbers

```

### 4. JS Notes

💛 笔记。

Note: In JS, when you access the value of an input element, it is _always_ a string, no matter which type of input it is. And when two strings are added in JS, they get concatenated instead of added mathmatically.

```
<input type="number" id="num1" placeholder=" Number 1" />
<input type="number" id="num2" placeholder=" Number 2" />
```

### 4. Installing & Using TypeScript

@index.html, @first-proj.js, @first-proj.ts

Install: <br />
`npm install -g typescript`

Compile <br />
`tsc helloworld.ts`

### 5. TypeScript Advantages - Overview

💛 学习清单？之后回来看看。

TypeScript adds ...

- Types!
- Next-gen JS Features (complied down for older Browsers)
- Non-JS Features like Interfaces or Generics
- Meta-Programming Features like Decorators
- Rich Configuration Options
- Modern Tooling that helps even in non-TS Projects

### Course Outline

TypeScript Basics <br />
↓ <br />
Compiler & Configuration Deep Dive <br />
↓ <br />
Working with Next-gen JS Code <br />
↓ <br />
Classes & Interfaces <br />
↓ <br />
Advanced Types & TS Features <br />
↓ <br />
Generics <br />
↓ <br />
Decorators <br />
↓ <br />
Full Proj <br />
↓ <br />
Working with Namespaces & Modules <br />
↓ <br />
Webpack & TS <br />
↓ <br />
Third-Party Libraries & TS <br />
↓ <br />
React + TS & NodeJS + TS
