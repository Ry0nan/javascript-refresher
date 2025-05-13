const x = [1, 2, 3, 4];
const y = [1, 2, 3, ...x]

y.push("hello")

console.log(x, y);

//the ... makes the array not have the same reference