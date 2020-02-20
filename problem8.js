var arr = process.argv;
const express = require('express')
const app = express()
const fs = require('fs')
app.get('/books',function(req,res){
     fs.readFile(arr[3],function(e,data){
        final = JSON.parse(data)
        res.json(final)
      })
     
})
app.listen(arr[2]);