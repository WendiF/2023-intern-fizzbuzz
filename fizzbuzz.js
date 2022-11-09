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
            answer = add_phrase(i, answer, 3, "Fizz");
            answer = add_phrase(i, answer, 5, "Buzz");
            answer = add_phrase(i, answer, 7, "Bang");
        }

        // Check further multiples
        answer = insert(i, answer, 13, "Fezz", "B");
        answer = reverse_phrase(i, answer, 17);

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

// Function to check for multiple
// Appends string to array
function add_phrase(i, answer, n, phrase) {
    if (i % n == 0) {
        answer.push(phrase);
    }
    return answer
}

// Function to check for multiple
// Inserts string before first flag_letter
function insert(i, answer, n, phrase, flag_letter) {
    if (i % n == 0) {
        // Case where number is a multiple of 13
        // Insert string before first "B" string
        let position = 0;
        for (let j = 0; j < answer.length; j++) {
            if (answer[j][0] == flag_letter) {
                position = j;
                break;
            }
        }
        answer.splice(position, 0, phrase);
    }
    return answer
}

// Function to check for multiple
// Reverses order of array
function reverse_phrase(i, answer, n) {
    if (i % n == 0) {
        answer.reverse();
    }
    return answer
}

// Now, we run the main function:
fizzbuzz();

