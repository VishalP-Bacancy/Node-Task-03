const fs = require('fs');
const path = require('path');

module.exports = (folderPath, fileExtension, callback) => {
  fs.readdir(folderPath, (err, fileList) => {
    if (err) {
      return callback(err);
    }
    
    const filteredList = fileList.filter(file => path.extname(file) === `.${fileExtension}`);
    
    callback(null, filteredList);
  });
};
