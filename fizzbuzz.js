// This is our main function
function fizzbuzz() {
    // Iterate from 1 to 100
    for (let i = 1; i < 101; i++) {
        let answer = "";
        // Check if number is an identified multiple
        if (i % 3 == 0) {
            // Case where number is a multiple of 3
            answer = answer.concat("fizz");
        }
        if (i % 5 == 0) {
            // Case where number is a multiple of 5
            answer = answer.concat("buzz");
        }
        // Print number or phrase
        if (answer.length > 0) {
            // Case where number is a multiple
            console.log(answer);
        } else {
            // Case where number is not an identified multiple
            console.log(i);
        }
    }

}

// Now, we run the main function:
fizzbuzz();

