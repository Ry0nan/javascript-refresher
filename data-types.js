if (true) {
    var x = 3;
}

console.log(x);

// weird that js just returns an undefined variable instead of an error. neat.
function test() {
    console.log(x);
    var x = "test";
    console.log(x);
}

test();