// JavaScript String
let x = `apple`; // template or back tick 
let y = "banana"; // Double quotes 
let z = 'Mango';// single qoutes
// Always remember string method return new string

console.log(`String Practice`);
// Print String
 console.log(x,y,z);
 // string length
 console.log(x.length);

 // escape character
 console.log(`Hello , "dear" ,'I respect',\`this is good\` `);

 // alway break line after operator use `` for project
 let text =
 `
 this is
 good. for  multiline . 
 
 
 `;
 console.log(`mulitiline string : ${text}`);


 // Javascript object
 let txt = new String("sigma");
 console.log(txt);
 let txt1 = "sigma";
 console.log(txt == txt1);// True
 console.log(txt === txt1)// false new keyoword create ojbect string
 let txt2 = new String("sigma");
 console.log(txt == txt2); // object never equal  


// String Interpolation 
// add variable in template string
// Syntax 
// ${...}
let role = 4;
let user =`Sigma role : ${role}`; // used in put patch , delete api 
console.log(user);


// Extracting String Characters
let aa = "Hello Dear";
console.log(`find first character of ${aa}  ,character is ${aa.charAt(0)}`);
console.log(`Find the first character code of ${aa}  , code is ${aa.charCodeAt(0)}`);
console.log(`Find the first character code of ${aa} , code is  ${aa.codePointAt(0)}`);
console.log(`Find the fist second letter of ${aa}, letter is ${aa.at(1)}`);
console.log(`find the last letter of ${aa} , last letter is ${aa.at(-1)}`);
// find letter by index similar  array 
console.log(`find the 3 letter of ${aa} , 3 letter is ${aa[2]}`);
console.log(`${aa} in upper case ${aa.toUpperCase()}`);
console.log(`${aa} in lower case ${aa.toLowerCase()}`);