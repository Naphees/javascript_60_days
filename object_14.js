// JavaScript Object
// Objects are variable store data in key : value pairs
// store value, function , object etc.

const person = {
    name:"Sima",
    age :26
}

// access object properties
console.log(person)
// access ojbect property
console.log(person.name);
console.log(person["age"]); // both are valid

// add object property
person.role ="Developer";
console.log(person)

// create object with new Object() constructor
const details = new Object({name:"King"})
console.log(details);

// check object is equal
console.log({name:"king"} == {name:"king"}); // always false  return  value same
console.log({name:"king"} === {name:"king"});// false value same


// ojbect also have method
const fullname = {
    name:`Sigma`,
    role:`king`,
    full : function(){
        return this.name + " " + this.role;
    },
    al : ()=>{
        return "go" + this.name;
    }
}
console.log(fullname.full);
console.log(fullname.full());
console.log(fullname.al);
console.log(fullname.al());


// delete property
delete fullname.name;
console.log(fullname)
delete fullname.al;
console.log(fullname)
delete fullname.full;
console.log(fullname);

// add variable in object
let name = "Sigma";
let detail = fullname[name];
console.log(detail);