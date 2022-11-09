// This is our main function
function fizzbuzz() {
    // Iterate from 1 to 255
    for (let i = 1; i < 256; i++) {
        // Initialise array
        let answer = [];
        if (i % 11 == 0) {
            // Case where number is a multiple of 11
            answer.push("Bong");
        } else {
            // Append strings for numbers that are identified multiples
            answer = further_multiples(i, answer);
        }

        if (i % 13 ==0) {
            // Case where number is a multiple of 13
            // Insert string before first "B" string
            let position = 0;
            for (let j = 0; j < answer.length; j++) {
                if (answer[j][0] == "B") {
                    position = j;
                    break;
                }
            }
            answer.splice(position, 0, "Fezz");
        }

        if (i % 17 ==0) {
            // Case where number is a multiple of 17
            // Reverse order of array
            answer.reverse();
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

