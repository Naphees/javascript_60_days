// variable in js
// declare by var, let, const, automatic
// var = block scope , function scope , redeclare , reassign , hosting

// var keyword
var name ="Alfa";
console.log(name);


// let keyword
{
    let username = "Alfa";
    console.log(`Username ${username}`);
}

// const  used for fixed value , scope block , not redeclare
{
    const a = "hello";
    console.log(` a is ${a}`)
}


// 8  Data Type in Javascipt
// 
{
  // String
  let color = 'Yello';
  let colors = "yello";
  let car = `Audi`  
  console.log(`String  ${color},${colors},${car}`);
// Number
let length = 14;
let length1 = 3.4;
let length2 = -3;
let length3 = -4.4;
console.log(length,length1,length2,length3);


// BigInt
let x = 123456789012345678901234566789n;
let y = BigInt("1234566789012345678901245");
console.log(x,y)

// Boolean
let b = true;
let b1 = false;
console.log(b,b1)



// Object
const person = {name:"Sigma", age:"25"}
console.log(person);
console.log(person.name)


// Array
const cars = ["Saab","Volvo",34, "Alfa"];
console.log(cars)

// Date Object
const date = new Date("2025-03-23");
console.log(date);


// Undefined
let c;
console.log(c)


// Null
 let yy = null;
 console.log(yy)

 // symbol
 const s = Symbol();
 console.log(s)

 // find data type by typeof operator
 console.log(typeof (4 + 3));
}