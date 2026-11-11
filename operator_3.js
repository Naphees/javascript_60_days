// Arithmetic Operators
{
    console.log(`Arithmetic Operator`)
    let a = 10;
    let b = 3;
    console.log(a + b); // 13
    console.log(a % b); // 1
    console.log(a ** b); // 1000
}

//  Comparision Operators
{
    console.log("Comparison Operators")
    console.log(10 == "10"); // true because check only value
    console.log(10 === "10"); // False 
    console.log(5 != "5"); // False
    console.log(5 !== "5") // True
}

// Logical Operators
{
    // Logical AND &&
    console.log(`Logical Operators `)
    let a = 10;
    let b = 20;
    console.log(a > 5 && b < 30) // True
    console.log(a > 15 && b < 30) // False
}

{
     // Logical Or (||)
     console.log(`Logical OR ||`);
     let x = 5;
     let y = 10;
     console.log(x > 10 || y > 5); // True
     console.log(x > 10  || y < 5); // False
}

{
    // Logical Not (!)
    console.log(`Logical Not (!)`);
    let isLoggedIn = false;
    console.log(!isLoggedIn); // True
    console.log(!!isLoggedIn); // False
}

// Increment Operators (++)
{
    console.log(`Increament Operators`);
    let x = 5;
    console.log(x++) // 5
    console.log(++x) // 7
    console.log(x) // 7
}

// Assignment Operators
{
     console.log(`Assignment Operators`);
     let a = 10;
     a += 5; // 15
     a *= 2; // 30
     a -= 10 // 20
     console.log(a);// 20


}

// Ternary Operator (? :)
{
     console.log(`Ternary Operators`);
     let age = 20;
     let result = age >= 18 ? `Adult` : `Minor`;
     console.log(result) // result Adult because age >= 18
}

// Type Operators (typeof)
{
    console.log(`typeof operator`);
    console.log(typeof 100); // number
    console.log(typeof "hello"); // String
    console.log(typeof true); // boolean
    console.log(typeof undefined)// undefined
    console.log(typeof null)// object
}

// Operator Precedence
{
    console.log(`Operator Precedence`)
    let result = 10 + 5 * 2 - 4 / 2; // 18
    console.log(result) // 18
}