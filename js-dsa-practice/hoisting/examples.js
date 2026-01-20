
// var hoisting
console.log(a); // undefined
var a = 10;// Assigning after logging
console.log(a); // 10

// let hoisting (TDZ)
try {
  console.log(b);// This will throw ReferenceError
} catch (e) {
  console.log("Cannot access 'b' before initialization");
}
let b = 20;

// const hoisting (TDZ)
try {
  console.log(c);// This will throw ReferenceError
} catch (e) {
  console.log("Cannot access 'c' before initialization");
}
const c = 30;

// function declaration
hello();
function hello() {
  console.log("Hello from function declaration");// This works due to hoisting
}

// function expression
try {
  greet();
} catch (e) {
  console.log("greet is not a function");// This will throw TypeError
}
var greet = function () {
  console.log("Hello from function expression");// This won't work due to hoisting behavior
};
