const express = require('express')
const path = require('path')

const app = express()
const pathSite = process.argv[3];
 
app.use(require('stylus').middleware(pathSite||path.join(__dirname, 'public')));
app.use(express.static(pathSite||path.join(__dirname, 'public')));

const port = process.argv[2]
app.listen(port, () => {
    console.log(`Server is listening on Port: ${port}`)
})