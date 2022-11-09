// This is our main function
function fizzbuzz(N) {
    console.log("Let's play FizzBuzz!");

    function fizz(list) {
        list.push('Fizz')
        return list
    }

    function buzz(list) {
        list.push('Buzz')
        return list
    }

    function bang(list) {
        list.push('Bang')
        return list
    }

    function bong(list) {
        list = ['Bong']
        return list
    }

    function fezz(list) {
        const first_B = list.findIndex((string) => string.slice(0,1) == 'B')
        if (first_B == -1) {
            list.push('Fezz')
        }
        else {
            const start = list.slice(0, first_B)
            const end = list.slice(first_B)
            list = start.concat(['Fezz'], end)
        }
        return list
    }

    function reverse(list) {
        list.reverse()
        return list
    }

    const rules = {
        3:fizz,
        5:buzz,
        7:bang,
        11:bong,
        13:fezz,
        17:reverse
    }
    for (let i = 1; i <= N; i++) {
        let out = []
        for (const key in rules) {
            if (!(i % key)) {
                out = rules[key](out)
            }
        }
        if (out.length > 0) {
            console.log(i + ': ' + out.join(''))
        }
        else console.log(i + ': ' + i)
    }

}

/*function get_user_input() {
    let input = prompt("How high will we play FizzBuzz to?: ")
    let N = parseInt(input)
    while (N == NaN){
        input = prompt("I'm sorry, that's not a number, please try again: ")
        N = parseInt(input)
    }
    return N
}

// Now, we run the main function:
const N = get_user_input(N)*/
const N = 300
fizzbuzz(N);

