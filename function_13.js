// JavaScript function()

function sayHello(){
    return "hello";
    let x = 5 + 10; // this line not execute because return 
}
console.log(sayHello); // return function body
console.log(sayHello()) // return hello


// parameters and arguments
// parameters are name passed in function defination
function myFun(a,b){// a,b are parameters
 return a + b;
}
console.log(myFun(4,4));// 4,4 are arguments  return 8

 // default parameters
 function multi(x,y = 10){return x * y}
 console.log(multi(3));// 30
 console.log(multi(4,4)); // 16