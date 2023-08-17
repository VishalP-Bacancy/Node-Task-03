const process = require('process');
const arguments = process.argv
let sum = 0

for (let i = 2; i < arguments.length; i++) {
    // console.log(arguments[i])
    sum += +arguments[i]
}

console.log(sum)