// Javascript Numbers
let x = 3;
let y =4.4;
console.log(x,y);
console.log(typeof x , typeof  y);

// large number and small number defined with scientific exponentation
x = 134e5;// x = 13400000
console.log(x)
x = 123e-5;// x = 0.00123
console.log(x)

// interger Precision
// accurate up to 15 digits
x = 123456789012345;// accurate
console.log(x);
x = 123456789012345633;// inaccurate
console.log(x)

// the maximam number of decimal is 17 digits
x = 12.12345678901234567;
console.log(x);

// Float precision
// floating point arithemetic is not always 100% accurate
x = 0.12 + 0.3;
console.log(x) 
// solve this problem  above it helps and multiply and divide
x = (0.12 * 10 + 0.3) /10;
console.log(x)// now accurate

// Number String
console.log("3" + "4");// 34 string
console.log(3 + 4 + "4") // 74 string
console.log("100" /10) ; // return 10 number
console.log("100" / "10")// return 10 number
console.log("100" * "10")// return 1000 number
console.log("100" * 10);// return 1000 number
console.log("100" - "10");// return 90 number
console.log(100 - "10");// return 90 number


// NaN = Not a Number
// Nan is javascript reserved word indicating that a number is not a legal number
// Trying to do arithmetic with a non numeric string will result in NaN (Not a number)

x = 100 / "apple";
console.log(x)// NaN
x = NaN;
y = 5;
let z = x + y ; // NAN
console.log(z);
z = x + "5";// NaN5
console.log(z)
console.log(typeof NaN);// number