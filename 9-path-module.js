const path = require("path") //This makes available all path properties

console.log(path.sep) // console logs path of the file

const filePath = path.join('/content','subfolder','test.txt')
console.log(filePath)

const absolute = path.resolve(__dirname,'content','subfolder','test.txt')
console.log(absolute)