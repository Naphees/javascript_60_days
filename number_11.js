// JavaScript Numbers methods

// toString() : convert number into string
console.log(typeof (10.44 ).toString());

// toFixed() : control the digits afterdecimal point
console.log(34.444.toFixed(2)); // 34.44
console.log(44.444.toFixed(5)); // 44.44400

// toPresion() : format a number to a specific mumber of significant digits
let x = 123.456;
console.log(x.toPrecision(4)) // 123.5

// converting variable to number
// Number(), parseInt(), parseFloat()

console.log(Number(true));// 1
console.log(Number(false)); // 0
console.log(Number("10"));// 10
console.log(Number(" -10 ")); // -10
console.log(Number("10.33")); 10.33
console.log(Number("33,44"));// NaN , not allow
console.log(Number(33,44,55));// 33 first return
console.log(Number("33 44"));// NaN space not allow between degits
console.log(Number("Alfa"));// Nan
console.log(Number(new Date("2012-09-4"))); // return microseconds


// parseInt() return whole number ,space allow  and start with number first number return
console.log(parseInt("-10"));// -10
console.log(parseInt("-10.33"));// -10
console.log(parseInt(4.5 - 5));// -0
console.log(parseInt("-33 + 4.4"))// -33
console.log(parseInt("10 3"));// 10
console.log(parseInt("10 year"));// 10  "start with number"
console.log(parseInt("year 10")); // Nan "not start with number"