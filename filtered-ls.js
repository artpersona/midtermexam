var arr = process.argv;
const fs = require('fs');
arr[3] = "."+arr[3];
fs.readdir(arr[2],function callback(err,list){
    const path = require('path');
    for(var i=0; i<list.length;i++){
        if(path.extname(list[i]) == arr[3]){
            console.log(list[i]);
        }
    }
})