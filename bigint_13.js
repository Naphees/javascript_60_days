// BigInt data type in JavaScript
// JavaScript Number are only accurate up to 15 digits

{
    // 15 digits 
    let x = 123456789012345;
    console.log(x);
    // above 15  digits
    let y = 1234567890123456344;
    console.log(y);
}

// Handle this problem with BigInt

// How to create BigInt 
// 1. using an iteger literal with an n suffic 
// 2. Using the BigInt() constructor with a string

// using literal n suffix
{
    let x = 12345678901234567890n;
    console.log(x);
    // check data type
    console.log(typeof x);// bigint
}
// using the BigInt() constructor with a string
{
    let x = BigInt("12345678901234567890");
    console.log(x);
    // check data type
    console.log(typeof x);
}

// BigInt is the second numeric data type in javascript  (after number)

// It support arithmetic operations
{
    let x = 12345678901234567890n;
    let y = 1234567890n;
    let z = x + y;
    console.log(`Addition : ${z}`);
    z = x - y;
    console.log(`Subtraction : ${z}`);
}

// Mixing BigInt and number not allowed (will result in a typeerror)
// Explict conversion must be done first
{
    try{
    let x = 10n;
    let y = 4;
    let z = x + y;
    console.log(z);
    }catch(error){
        console.log(error.message);
    }
}
