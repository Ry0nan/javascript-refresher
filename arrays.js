const arr = [1, 2, 3];

//dynamic array
const arr2 = new Array(5);
console.log(arr2);

// turns the string into array
const arr3 = Array.from("hello");
console.log(arr3);

// you can replace the indexes in the array
arr3[0] = "y";
console.log(arr3);

// I dont understand how the fuck this works
arr3[arr3.length + 5] = "test";
console.log(arr3);

/* pop 
   push 
   shift 
   unshift
*/
const arr4 = [1, 2, 3, 4 ,5];
arr4.pop();
arr4.shift();
arr4.unshift(1);
arr4.push(5);
console.log(arr4);

//different functions
console.log(arr2.lastIndexOf("o"));
console.log(arr2.includes("o"));

//concantenation
const arr5 = arr.concat(arr2);
console.log(arr5);