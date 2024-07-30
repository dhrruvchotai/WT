const express = require('express');
const app = express();

app.listen(3200,() => {
    console.log("Server started!!");
});


app.get('/home',(req,res) => {
    res.sendFile(__dirname+"/DemoApp.html");
});

app.get('/about',(req,res) => {
    res.sendFile(__dirname+"/DemoApp.html");
});

app.get('/contact',(req,res) => {
    res.sendFile(__dirname+"/DemoApp.html");
});

app.get('/', (req,res) => {
    res.redirect('/home');
});
