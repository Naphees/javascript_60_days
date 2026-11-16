// String Practice 
// Extracting string
// slice method
const str = "JavaScript";
console.log(str.slice(0,4));// JavaScript  last index r exclude

// it support negative index
console.log(str.slice(-1));// t

//  subString
// similar  slice but small diffrent  negative index means treated as 0
console.log(str.substring(0,4))// Java
console.log(str.substring(-1))//   not last return it return entire string // JavaScript


// substr method character based
// first argumemt  start  index , second is  length of characters
console.log(str.substr(0,4)); // Java
console.log(str.substr(4,6)); // Script


/// searching
console.log(`Index of S : ${str} is ${str.indexOf('S')}`);
//  find last index 
console.log(`${"Helllo"}: ${"l"} , ${"Hello".lastIndexOf('l')}`);


// searching
let aa = "Hello, dear I am developer, I am working on project. I am learing JS";
console.log(`Searging : I , ${aa.search("I")}`);


// matching
let matched = aa.matchAll("I");
console.log(matched)

// includes check value in string
let aaa = "this is my laptop";
console.log(aaa.includes("my"));// true