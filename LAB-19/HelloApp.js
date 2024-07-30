const express = require('express');

const app = express();

app.listen(4199, () => {
    console.log('server started!!');
});

app.get('/', (req,res) => {
    res.setHeader('Content-Type','text/html')
    res.send("hello brother!!")
});



