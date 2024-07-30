const http = require('http');
const fs = require('fs');
const url = require('url');
const path = require('path');

let server = http.createServer((req,res) => {
    if(req.url == '/home'){
        fs.readFile('home.html',(err,data) => {
            res.end(data);
        });
    }
    if(req.url == '/about'){
        fs.readFile('about.html',(err,data) => {
            res.end(data);
        });
    }
    else{
        res.end("hello");
    }
});

server.listen(4100, () => {
    console.log('server runnig.');
});
