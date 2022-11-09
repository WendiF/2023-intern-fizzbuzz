// This is our main function
function fizzbuzz() {
    // Iterate from 1 to 100
    for (let i = 1; i < 101; i++) {
        let answer = "";
        // Append strings for numbers that are identified multiples
        answer = further_multiples(i, answer);
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

// Function to check for multiples whose associated strings can be appended
function further_multiples(i, answer) {
    if (i % 3 == 0) {
        // Case where number is a multiple of 3
        answer = answer.concat("Fizz");
    }
    if (i % 5 == 0) {
        // Case where number is a multiple of 5
        answer = answer.concat("Buzz");
    }
    if (i % 7 == 0) {
        // Case where number is a multiple of 7
        answer = answer.concat("Bang");
    }
    return answer
}

// Now, we run the main function:
fizzbuzz();

