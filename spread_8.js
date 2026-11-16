// Spread Operator : ...
// used to unpacking ,expanding elements in array, object
// array
const arr1 = [1,2,3,4,5];
console.log(arr1); // pack array
console.log(...arr1);// self unpack array notive

// copy another array
const arr2 = [...arr1, 33,44,...arr1];
console.log(...arr2);

// add item in existing elements
 let arr3 = [...arr2, "lovely"];
 console.log(arr3);
