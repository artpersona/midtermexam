var arr = process.argv;
const express = require('express')
const app = express()
app.get('/home',function(req,res){
    res.end('Hello World!')
})
app.listen(arr[2]);