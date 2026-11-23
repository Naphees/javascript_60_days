// bigint with number
// convert number to bigint by BigInt()
// conver bigInt to number  by Number()
{
    let x = 124n;
    let y = Number(x);
    console.log(y, typeof y)
}
{
    let x = 1233;
    let y = BigInt(x);
    console.log(y,typeof y)

    console.log(44n == 44) // true
    console.log(44n === 44) // false
}

// math fuction not work with bigint
// json.stringify() can not handle bigInts throw an error

{
    // console.log(33n + 4)// error
    console.log(Number(33n) + 4) //  7

    console.log(33n - BigInt(3))//  30n
    let x = -30n; // support negative number
    console.log(x)
   // x = 44.4n// now support
    console.log(x)

    x = 30n;
    console.log(x + "3") // 303
   // console.log(x - "3") // cannot mixing error
   console.log(Number(x) - "3") // 27
}