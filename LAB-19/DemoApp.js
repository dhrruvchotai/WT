// const express = require('express');
// const app = express();

// app.listen(3200,() => {
//     console.log("Server started!!");
// });


// app.get('/home',(req,res) => {
//     res.sendFile(__dirname+"/DemoApp.html");
// });

// app.get('/about',(req,res) => {
//     res.sendFile(__dirname+"/DemoApp.html");
// });

// app.get('/contact',(req,res) => {
//     res.sendFile(__dirname+"/DemoApp.html");
// });

// app.get('/', (req,res) => {
//     res.redirect('/home');
// });


const express = require('express');
const fs = require('fs');
const app = express();

const port = 3400;

app.get('/home', (req,res)=>{
    res.setHeader('Content-Type', 'text/plain');
    fs.readFile('home.txt', (err,data)=>{ 
        res.send(data.toString())        
    })
});

app.get('/about', (req,res)=>{
    res.setHeader('Content-Type', 'text/plain');
    fs.readFile('about.txt', (err,data)=>{
        res.send(data.toString())
    })
});

app.get('/contact', (req,res)=>{
    res.setHeader('Content-Type', 'text/plain'); 
    fs.readFile('contact.txt', (err,data)=>{
    res.send(data.toString())
    })
});


app.listen(port,()=>{
    console.log("done") 
})
