const fs = require('fs')
const process = require('process')
const filePath = `${process.argv[2]}`

const data = fs.readFileSync(filePath, 'utf8')


const numOfLines = data.split('\n').filter(data => data !== '\r')

console.log(numOfLines.length - 1)