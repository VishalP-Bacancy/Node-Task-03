const fs = require('fs');
const path = require('path');

const folderPath = process.argv[2];
const fileExtension = process.argv[3];

fs.readdir(folderPath, (err, files) => {
    if (err) {
        console.error('Error reading directory:', err);
        return;
    }

    files.forEach((file) => {
        if(path.extname(file) === `.${fileExtension}`){
            console.log(file)
        }
    })
});
