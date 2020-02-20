var arr = process.argv;


const fs = require('fs');
fs.readFile(process.argv[2], 'utf8', function callback(err, data) {
    var arr = data.toString();
    var x  = arr.split('\n');
    console.log(x.length-1);
  });




