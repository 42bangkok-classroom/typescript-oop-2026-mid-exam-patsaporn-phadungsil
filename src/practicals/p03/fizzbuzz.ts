// Write your code below
const i: number = +process.argv[2]; // Convert argument to number

// Check for invalid or non-positive input
if (Number.isNaN(i) || i <= 0) {
    console.log("Invalid input");
} else {
    // Loop from 1 to i (inclusive)
    for (let j = 1; j <= i; j++) {
        if (j % 15 === 0) {
            console.log("FizzBuzz");
        } else if (j % 3 === 0) {
            console.log("Fizz");
        } else if (j % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(j);
        }
    }
}
