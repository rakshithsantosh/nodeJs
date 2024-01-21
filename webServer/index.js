const http = require('http')
const url = require('url')

const server = http.createServer((req,res)=>{
    const pathName = req.url
    if(pathName==='/overview'){
        res.end("this is overview")
    }
    else if (pathName === '/product'){
        res.end("this is product")
    }
    else{
        res.writeHead(404,{
            'Content-type':'text.html',
            'my-own-header':'hello world'
        })
        res.end("<h1>Page not found</h1>")
    }
})

server.listen(8000,'127.0.0.1',()=>{
    console.log("listening to request on port 8000")
})