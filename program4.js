var fs = require('fs');
fs.readFile(process.argv[2], 'utf8', function (error, bufferAsString) {
    if (error) {
        return console.log(error);
    }
    console.log(bufferAsString.split('\n').length - 1);
});