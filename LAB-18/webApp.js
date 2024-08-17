const http = require('http');
const fs = require('fs');
const path = require('path');


const server = http.createServer((req,res)=>{
    
    if(req.url == "/home"){
        fs.readFile('home.html', (err,data)=>{
            res.end(data);
        });
    }
    else if(req.url == "/about"){
        fs.readFile('about.html', (err,data)=>{
            res.end(data);
        });
    }
    else if(req.url == "/contact"){
        fs.readFile('contact.html', (err,data)=>{
            res.end(data);
        });
    }
    else{
        res.end("Please enter a valid url.");
    }
});

server.listen(4300,()=>{
    console.log("Server started.");
})
