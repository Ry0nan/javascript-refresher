const myPromise = new Promise((resolve, reject) => {
    // Asynchronous operation
    if (true) {
        resolve("good"); //Fulfill the promise
    } else {
        reject("bad"); // Reject the promise
    }
});

myPromise.then((value) => {
    console.log(value);
}).catch((value) => {
    console.log(value);
}).finally(() => {
    console.log("always");
});