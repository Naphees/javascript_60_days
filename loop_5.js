// JavaScript Loop
console.log(`for loop`)
for(let i = 0 ; i <= 5; i++){
    console.log(i)
}
console.log(`while loop`)
let i = 0;
// While loop
while(i <= 5){
    console.log(i);
    i += 2;
}

// do while loop
console.log("do while loop");
i = 10;
do{
    console.log(i);
    i += 1;
}
while(i <= 5);


// break ,and continue keyword
console.log(`break and continue keywords`);
for(let i = 10;i >= 0; i--){
    if (i === 7){
        console.log(`Skip at ${i}`);
        continue;// skip 7
    }
    else if(i === 3){
        console.log(`break at ${i}`);
        break; // break loop
    }
    console.log(i)
}