const fs = require('fs');

const text = fs.readFileSync('./text/input.txt','utf-8') 

console.log(text)

const textout = `some text i think ${text}`

fs.writeFileSync('./text/output.txt',textout)

console.log("file written")

//reading file asynchronous way
fs.readFile('./text/input.txt','utf-8',(err,data)=>{
    console.log(data)
})