// This is our main function
function fizzbuzz() {
    // Iterate from 1 to 100
    for (let i = 1; i < 101; i++) {
        if (i % 15 == 0) {
            // Case where number is multiple of 3 and 5
            console.log("fizzbuzz")
        } else if (i % 3 == 0) {
            // Case where number is multiple of 3
            console.log("fizz")
        } else if (i % 5 == 0) {
            // Case where number is multiple of 5
            console.log("buzz")
        } else
        console.log(i);
    }

}

// Now, we run the main function:
fizzbuzz();

