const http= require('http')

const hostname='127.0.0.1';
const port =3000

const server= http.createServer((req,res)=>{
    if(req.url==='/')
    {
        res.statusCode=200;
        res.setHeader('content-type','text/plain')
        res.end('Welcome to Day 1 of Learning NodeJs')
    }else if(req.url==='/secret')
    {
        res.statusCode=200;
        res.setHeader('content-type','text/plain')
        res.end('No Secret found!')
    }else{
        res.statusCode=404;
        res.setHeader('content-type','text/plain')
        res.end('404 Not found')
    }
})
server.listen(port,hostname,()=>{
    console.log(`Server started at http://${hostname}:${port}`);
})