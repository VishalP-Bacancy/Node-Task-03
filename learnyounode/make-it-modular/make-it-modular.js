const mymodule = require('./mymodule');

const folderPath = process.argv[2];
const fileExtension = process.argv[3];

mymodule(folderPath, fileExtension, (err, files) => {
  if (err) {
    console.error('An error occurred:', err);
    return;
  }

  files.forEach(file => {
    console.log(file);
  });
});
