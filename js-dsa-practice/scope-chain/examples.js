// Example of Scope Chain in JavaScript
let gobalscope ="hello";
function Global(){
    console.log(gobalscope);
}
Global();
// Example of Lexical Scope in JavaScript
function outer(){
    let a=10;
    function inner(){
        console.log(a);
    }inner
}
outer();

// Example of Block Scope in JavaScript
function scopetest(){
    let x= 10;
}
scopetest();
// console.log(x); // Uncaught ReferenceError: x is not defined


// Block scope example
{
    let y=20;
    const z=30;
    console.log(y);
    console.log(z);
}
// console.log(y); // Uncaught ReferenceError: y is not defined 
// console.log(z); // Uncaught ReferenceError: z is not defined
