const readline = require(`readline`);

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

reader.question(`Hello! Welcome to Password Validator 3000! Please enter your password.`, function(answer) {
    var length = answer.length
    if (length >= 10){
       console.log(`Success!!!`) 
    } else {
        console.log(
        `          ______ ___  _____ _     _   _______ _____ _ _ _ 
         |  ___/ _ ||_   _| |   | | | | ___ |  ___| | | | 
         | |_ / /_| | | | | |   | | | | |_/ / |__ | | | |
         |  _||  _  | | | | |   | | | |    /|  __|| | | |
         | |  | | | |_| |_| |___| |_| | || || |___|_|_|_|
         |_|  |_| |_/|___/|_____/|___/|_| |_|____/(_|_|_)`)
    }
})