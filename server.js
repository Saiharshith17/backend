const http=require('http')
let httpServer=http.createServer()
httpServer.listen(4000,()=>console.log("port 4000"));