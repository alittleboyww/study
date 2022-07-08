var personAction = process.argv[process.argv.length - 1];
var game = require("./lib.js")

// var result = game(personAction);
var count = 0;
process.stdin.on('data', e => {
    const personAction = e.toString().trim()
    console.log(personAction)
    const result = game(personAction)

    if (result === -1) {
        count++;
    }
    if (count === 3) {
        console.log("you win")
        process.exit()
    }
})










