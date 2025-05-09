if (true) {
    console.log("hello")
}

// you dont need braces if the it is just a single line:
if (true) console.log("hi");

// it can also work this way
if (true)
    console.log("run")
else
    console.log("dont run")

// inline conditional. very specific use? ignore probably
const cond = 2 < 3 ? "okay cool" : "no";
console.log(cond);

//switch statements. self-explanatory
const value = 3;

switch (value) {
    case 3:
        console.log("3 is cool");
        break;
    case 4:
        console.log("4 is cool");
        break;
    case 5:
        console.log("5 is cool");
        break;
}