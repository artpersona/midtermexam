var arr = process.argv;
const express = require('express')
const app = express()
app.put('/message/:id',function(req,res){
    var str = require('crypto')
      .createHash('sha1')
      .update(new Date().toDateString() + req.params.id)
      .digest('hex')
      res.send(str)
})
app.listen(arr[2]);