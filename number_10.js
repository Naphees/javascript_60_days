//  JavaScript Number
// Infinity : or (-Infinity) is number data type  check number outside the 
// largest possible number

{
    let num = 2;
    while (num != Infinity){
        num = num * num;
        console.log(`${num}`)
    }
}
{
    console.log(`${2 / 0}`);// Infinity
    console.log(`${-2 / 0}`); // -Infinity
    console.log(typeof 0); // number
    console.log(typeof Infinity);// number
}

// Hexadecimal: JS intercepts numeric constants as hexadecimal if they
// are preceded  by 0x
{
    let x = 0xff;
    console.log(x)// 255
}
// Never start number from 07 
// write  way is 7
// use toString() method to find number category like binary, hexadecimad, octal , decimal
// By default number as base 10 decimal
// binary base 2 (0,1)
// octal base 8 (0,1,2,3,4,5,6,7)
// hexadecimal base 16 (0,1,2,3,4,5,6,7,8,9,a.b.c.d.e.f)
// decimal base 10 (0,1,2,3,4,5,6,7,8,9) 
{
    let x = 34;
    console.log(x.toString(10));// decimal 34
    console.log(x.toString(2)); // binary 100010
    console.log(x.toString(16));// hexadecimal 22
    console.log(x.toString(8));// octal 42
    console.log(x.toString(32)); //12
}


// Number object
{
    let x = 10;// primitive number
    let y = new Number(10);// object number 
    let z = new Number(10); // oject number
    console.log(typeof x ,typeof y, typeof z);
    console.log(x == y);// true 
    console.log(x === y);// false
    console.log(y == z);// false
    console.log(y === z);// false
    // remeber ojbect comparision always return false
    
    
}