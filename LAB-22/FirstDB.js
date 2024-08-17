const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const Student = require('./Student')

const connStr = "mongodb+srv://DhruvChotai:Dhruv10@cluster0.5ssmx.mongodb.net/"

mongoose.connect("mongodb+srv://DhruvChotai:Dhruv10@cluster0.5ssmx.mongodb.net/").then(() =>{

    const app = express();

    app.use(bodyParser.urlencoded);

    app.listen(4140,() => {
        console.log("Sever Started!!")
    });

});