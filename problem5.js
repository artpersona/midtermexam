var arr = process.argv
const express = require('express')
const app = express()
app.use(require('stylus').middleware(process.argv[3]))
app.use(express.static(process.argv[3]||path.join('public')))

app.listen(arr[2]);