var arr = process.argv;
const fs = require('fs');
var buf = fs.readFileSync(process.argv[2]);
var x = buf.toString();
var arr2 = x.split('\n');
console.log(arr2.length-1);




