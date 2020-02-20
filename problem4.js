var arr = process.argv;
const express = require('express')
const app = express()
const bodyparser = require('body-parser')
app.use(bodyparser.urlencoded({extended: false}))
app.post('/form',function(req,res){
    res.send(req.body.str.split('').reverse().join(''))
})
app.listen(arr[2]);