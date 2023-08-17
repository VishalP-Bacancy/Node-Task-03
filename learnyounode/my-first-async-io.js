const fs = require('fs')
const process = require('process')
const filePath = `${process.argv[2]}`

fs.readFile(filePath, 'utf8', (err, data) => {
    if (!data || err) {
        console.log("Error reading file!")
        return;
    }

    const lines = data.split('\n').filter((line)=> line !== '\r')
    
    console.log(lines.length - 1)

})