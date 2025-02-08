/*no.3  FizzBuzz */
for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("FizzBuzz"); // Check for FizzBuzz first
    } else if (i % 3 == 0) {
        console.log("Fizz"); // Check for Fizz
    } else if (i % 5 == 0) {
        console.log("Buzz"); // Check for Buzz
    } else {
        console.log(i); // Print the number if none of the above
    }
}