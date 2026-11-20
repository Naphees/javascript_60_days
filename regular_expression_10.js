// Regular Expression 
// regular expression is used to find pattern in stiring . 
// it used to check valid  email, password, age, mobile etc.

// start with /  --- / end 

const regex = /hello/; // this is regular expression  
// use test() method to check  pattern exist or not  in string
// test() method return true or false
console.log(regex.test("hello"));// true
console.log(regex.test("this is hello "));// true
console.log(regex.test("this is"));// false
console.log(regex.test("Hello"));// false


// 2. 
const regex1 = /^hello$/;  // start  from ^ and end with $
console.log(regex1.test("hello"));// true
console.log(regex1.test("hello hello"));// false

// [a-z] : meanse any lowercase alphabet
// [A-Z]: meanse any uppper Case Alphabet
// [0-9]: meanse any number
{
    const regl = /^[a-z]+$/;
    const regu = /^[A-Z]+$/;
    const regn = /^[0-9]+$/;
    console.log(`pattern`)
    console.log(regl.test("thisisgood"));// true
    console.log(regl.test("BadBoy"));// false
    console.log(regu.test("THISISGOOD"));// true
    console.log(regu.test("thiisisbad123"));// false

    // number check
    console.log(regn.test("123343433333"));// true
    console.log(regn.test("34444d"));// false

    // now mix 
    const r = /^[a-zA-Z0-9]+$/;
    console.log("Mix regular expression");
    console.log(r.test("1233ddddfASDDD"));// true

    

    
}
