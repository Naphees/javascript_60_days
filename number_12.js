// Number methods
console.log(`Number Method`);
// parseFloat() parses a string and return a number.
// space are allowed .only first number is returned.


console.log(parseFloat("10"));// 10
console.log(parseFloat(" 10.30 "));// 10.30
console.log(parseFloat("10 20 30"));// 10
console.log(parseFloat("10,30,30"));// 10
console.log(parseFloat("10 is love"));// 10
console.log(parseFloat("this is 10"));// NaN


// Bitwise Operator similar Python 
console.log(`Bitwise Operators`);
console.log(5 & 1);// 1
console.log(5 | 1);// 5
console.log(~5);// -6
console.log(5 ^ 1);// 4
console.log(5 << 1) ;// 10
console.log(5 >> 1);// 2
console.log(5 >>> 1);// 2