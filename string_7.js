// String method
// isWellFormed();
let text = "  Hello Dear, I am Developer  ";
console.log(`${text} is ${text.isWellFormed()}`);
let text1 = "I am 1234, this /u333";
console.log(`${text1} is ${text.isWellFormed()}`);

// remove space by trim()
console.log(`${text.trim()}`);
console.log(`${text.trimStart()}`);
console.log(`${text.trimEnd()}`);


// padStart() add item from start  until count string count false
let s = "Hell";
console.log(`Original ${s} with padStart : ${s.padStart(5,"l")}`);
console.log(`Original ${s}  with padEnd : ${s.padEnd(5,"a")}`);

console.log(`Original ${s}  with padStart : ${s.padStart(2,"1")}`);

// Repeat
let ss = s.repeat(4);
console.log(ss);

// Replace method

text = "Hello, dear ,You Are My Dear friend. DEar friend";
let newText = text.replace("dear","Sigma");
console.log(`Original ${text} , replaced ${newText}`);

// first change
console.log(` Original ${text}  \n with case insentive is ${text.replace(/dear/i,"Sigma")}`);
// global change
// use regular expression /g
console.log(`Original : ${text} \n Replaced : ${text.replace(/dear/g ,"Sigma")}`);

console.log(`Original ${text} \n replaceApp() : ${text.replaceAll("dear","Sigma")} `);