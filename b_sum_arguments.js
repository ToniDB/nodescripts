var argsArray = process.argv;
var valuesSum = 0;
for (i = 2; i < argsArray.length; i++) {
    valuesSum += Number(argsArray[i]);
}
console.log(valuesSum);