var arr = process.argv;
const express = require('express')
const app = express()
app.set('view engine', 'pug')
app.get('/home',function(req,res){
    res.render(arr[3],{date: new Date().toDateString()})
})
app.listen(arr[2]);