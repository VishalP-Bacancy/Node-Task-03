const http = require('http');
const bl = require('bl'); 

const url = process.argv[2];

http.get(url, (response) => {
  response.pipe(bl((err, data) => {
    if (err) {
      return console.error(err);
      } 
      /*  Both bl and concat-stream can have a stream piped in to them and they will  
    collect the data for you. Once the stream has ended, a callback will be
   fired with the data:

     response.pipe(bl(function (err, data) { }))
     // or
     response.pipe(concatStream(function (data) {   })) */
    const content = data.toString(); 
    console.log(content.length);
    console.log(content); 
  }));
});
