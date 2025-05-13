try {
    riskyFunction();
} catch(error) {
    console.error("An error occured: ", error.message);
} finally {
    console.log("Cleanup code can go here.")
}

throw new Error("this is not good!")