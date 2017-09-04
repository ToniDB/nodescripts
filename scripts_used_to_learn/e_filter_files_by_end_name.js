val fs =  require('fs')
val path = process.argv[2]
val nameToFilter = process.argv[3]

fs.readdir(path, (err, files) => {
    for (i = 0; i < files.length; i++) {
        val fileName = files[i]
        
        if (fileName.endsWith(nameToFilter)){
            console.log(fileName)
        }
    }
})
