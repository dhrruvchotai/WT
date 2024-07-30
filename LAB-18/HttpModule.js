const http = require('http');
const fs = require('fs');

let server = http.createServer((req,res) => {

    fs.readFile('HttpModule.js',(err,data) => {
        res.end(data);
    });
   
} );

server.listen(4100, () => {
    console.log('server runnig.');
});
