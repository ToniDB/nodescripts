var fs =  require('fs');
var path = process.argv[2];
var nameToFilter = process.argv[3];

fs.readdir(path, function(err, files){
    for (i = 0; i < files.length; i++) {
        var fileName = files[i];
        if (fileName.endsWith(nameToFilter)){
            console.log(fileName);
        }
    }
});