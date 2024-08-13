const fs = require('fs');

//exists
fs.exists('C:\\Users\\User\\Desktop\\JavaScript\\Js Lab\\LAB-17\\PathModule.js',(ans) =>{
    // console.log("File exists : "+ans);
});

fs.stat('C:\\Users\\User\\Desktop\\JavaScript',(err,data) => {
    
    // console.log(err);
    // console.log(data);

});

fs.readFile('PathModule.js',(err,data) => {
    
    // console.log(err);
    // console.log(data.toString())

});

fs.writeFile('Temp.txt','Hello',(err,data) => {

});

fs.appendFile('Temp.txt','\nagain hello from me!',(err,data) => {

});

fs.readFile('PathModule.js',(err,data) => {
    
    // console.log(err);
    // console.log(data.toString())

    fs.writeFile('Temp.txt',data.toString(),(err,data) => {

    });

});


