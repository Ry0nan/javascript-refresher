// js allows you to add strings and numbers. 

/* this is called type coercion where two incompatible data types 
are operated on, one of them is converted into another data type. 
the 6 is converted into a string for example. */
const x = 6;
const y = "7";
console.log(x + y);

/* since true is equal to 1, 
5 + true is equals to 6 */
const a = 5;
const b = true;
console.log(a + b);

/* it seems that js converts the string into a number
this time. js interactions are weird */
const c = "123";
const d = 2;
console.log(c * d);

/* this time js just returns NaN since the string
doesn't have any numbers */
const e = "hello";
const f = 3;
console.log(e * f);

/* you can convert strings into numbers
using type conversion */
const ni = "546.7";
const ce = 5;
console.log(Number(ni) + ce);

/* you can convert pixels
into numbers wtf */
const go = "500px";
const at = 5;
console.log(Number(go) + at);

