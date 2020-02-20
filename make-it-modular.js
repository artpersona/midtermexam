'use strict'
const checker = require('./mymodule.js')
const dir = process.argv[2]
const ext = process.argv[3]

checker(dir, ext, function (err, list) {
  
  list.forEach(function (file) {
    console.log(file)
  })
})
