const http = require('http');

const server = http.createServer((req,res)=>{

    if(req.url == "/home"){
        res.end("This is home");
    }
    else if(req.url == "/about"){
        res.end("This is about");
    }
    else if(req.url == "/contect"){
        res.end("This is contect");
    }
    else if(req.url == "/service"){
        res.end("This is service");
    }
    else{
        res.end("Hello, brooo");
    }
});

server.listen(4100,()=>{
    console.log("Sever started!!");
})