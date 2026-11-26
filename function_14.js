// return statement in JS function
// A function can return a value back to the code that called it
// when a function reaches a return statement ,function stop executing
// the value after the return keyword is send back to the caller

// Example
console.log(Hello()); // standart function is support hoisting
function Hello(){
   
    return "Hello Dear";
}
console.log(Hello);// it return function
console.log(Hello());// call function


// Js Function Expression
// a function expression is a function stored in a variable
// expression function does not support hoisting
//console.log(multiply(3 ,4));// Reference error 
const multiply = function(a,b){
    return a * b;
}
console.log(multiply(10,3));// call function return 30

// JS Arrow Functions
// Arrow function allow a shorter syntax for function expressions.
// We can skip the function keyword, the return keyword, and curly brackets
//console.log(multi(2,3)); arrow function not houisted  
let multi = (a,b) => a * b;
console.log(multi(3,4));// 12


// An Arrow function uses => symbol
// written with function expression
const add = (a,b)=>{
    return a +b;
}
console.log(add(3,4));// 7


// Before arrow
const addition  = function(a,b){
    return a + b;
}
console.log(addition(39,4));// 43

// with arror
const addition1 = (a,b)=> a + b;
console.log(addition1(3,3));// 6

// square
let square  = (a) => a * a;
console.log(square(3));// 9
square = a => a * a;
console.log(square(4))// 16