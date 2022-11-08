// This is our main function
function fizzbuzz() {
    console.log("Let's play FizzBuzz!");

    const rules = {
        3:'Fizz',
        5:'Buzz',
        /*7:'Bang',
        11:'Bong',
        13:'Fezz'*/
    }
    for (let i = 1; i < 101; i++) {
        let out = ""
        for (const key in rules) {
            if (!(i % key)) out += rules[key]
        }
        if (out) console.log(out)
        else console.log(i)
    }

}

// Now, we run the main function:
fizzbuzz();

