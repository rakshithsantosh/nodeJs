const http = require('http')

const server = http.createServer((req,res)=>{
    res.end("response from the server")
})

server.listen(8000,'127.0.0.1',()=>{
    console.log("listening to request on port 8000")
})