/*
==
===
!=
!==
<
>
<=
>=

*/

/* from what I understand, == is a type coercion comparison
so it will roughly know if what you're comparing  is technically
equal. for example, below you can compare true and 1 and 
it will return true because true is equal to 1 */
console.log(1 == true);

/* okay since javascript uses type coercion on ==. it is 
recommended to use === since it is a strict equality operator.
previous stuff like 1 being equal to true will not work
since they are two different data types. */
console.log(1 === true);

/* javascript also uses type coercion for < >. weird. */
console.log("3" > "2");