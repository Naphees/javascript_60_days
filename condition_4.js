// Condition Practice
// Part 1. if and else
    const evenOdd = ()=>{
        try{
            let num = 23;
            if(num % 2 === 0){
                console.log(`${num} is even`);
            }else{
                console.log(`${num} is odd`);
            }
        }catch(error){
            console.log(error);
        }
    }
    
evenOdd();

// check voting eligible  age >= 18  by ternary operator
const votingEligibility = (age) =>{
    try{
        age = Number(age);
        let person = (age >= 18) ? "Eligible" : "Not eligible";
        console.log(person);
    }catch (error){
        console.log(error);
    }
}

votingEligibility(23);
votingEligibility(15);

// find the largest number  among three number by else if
const largestNum = (a,b,c)=>{
    try{
        a = Number(a);
        b = Number(b);
        c = Number(c);
        if(a > b && a > c){
            console.log(`${a} is greatest number`);
        } else if (b > a && b >c){
            console.log(`${b} is greatest number`);
        }else {
            console.log(`${c} is greatest number`);
        }

    }catch(error){
        console.log(error);
    }
}
largestNum(2,4,5);