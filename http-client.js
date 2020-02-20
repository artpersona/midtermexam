var arr = process.argv
const http = require('http')

http.get(arr[2], function (response) {
  response.setEncoding('utf8')
  response.on('data', console.log)

})
