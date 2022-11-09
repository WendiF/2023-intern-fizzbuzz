// This is our main function
function fizzbuzz() {

    for (let i = 1; i <= 100; i++) {
        output = "";

        if (i % 3 === 0) {
            output = "Fizz";
        }

        if (i % 5 === 0) {
            output += "Buzz";
        }

        console.log(output !== "" ? output : i)
    }

}

function fizzbuzz2() {

    for (let i = 1; i <= 260; i++) {

        console.log(getOutput(i))
    }

}


function getOutput(i) {
    output = "";
    if (i % 11 === 0) {
        output = "Bong";
    } else {

        if (i % 3 === 0) {
            output = "Fizz";
        }

        if (i % 5 === 0) {
            output += "Buzz";
        }

        if (i % 7 === 0) {
            output += "Bang";
        }

    }

    if (i % 13 === 0) {
        // Find first B
        splitArr = output.split("B", 2)

        output = splitArr[0] + "Fezz";

        if (splitArr.length > 1) {
            output += "B" + splitArr[1];
        }
    }

    if (i % 17 === 0) {
        // Separate words by their capital letters
        words = output.split(/(?=[A-Z])/)
        if (words.length !== 0 && words[0] !== "") {
            output = "";
            for (let j = words.length - 1; j >= 0; j--) {
                output += words[j];
            }
        }

    }

    return output !== "" ? output : i;


}

// Now, we run the main function:
fizzbuzz2();

