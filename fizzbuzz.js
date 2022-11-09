// This is our main function
function fizzbuzz() {
    // Iterate from 1 to 121
    for (let i = 1; i < 121; i++) {
        // Initialise array
        let answer = [];
        if (i % 11 == 0) {
            // Case where number is a multiple of 11
            answer.push("Bong");
        } else {
            // Append strings for numbers that are identified multiples
            answer = further_multiples(i, answer);
        }

        // Print number or phrase
        if (answer.length > 0) {
            // Case where number is a multiple
            console.log(answer.join(''));
        } else {
            // Case where number is not an identified multiple
            console.log(i);
        }
    }
}

// Function to check for multiples whose associated strings can be appended
function further_multiples(i, answer) {
    if (i % 3 == 0) {
        // Case where number is a multiple of 3
        answer.push("Fizz");
    }
    if (i % 5 == 0) {
        // Case where number is a multiple of 5
        answer.push("Buzz");
    }
    if (i % 7 == 0) {
        // Case where number is a multiple of 7
        answer.push("Bang");
    }
    return answer
}

// Now, we run the main function:
fizzbuzz();

