var fs = require('fs');
var filePath = process.argv[1];
var buffer = fs.readFileSync(filePath);
console.log(buffer.toString().split('\n').length - 1);