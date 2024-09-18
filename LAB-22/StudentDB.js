const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const Student = require('./Student')

require('dotenv').config();

const connStr = "mongodb+srv://"+process.env.user+":"+process.env.Password+"@cluster0.5ssmx.mongodb.net/test"

mongoose.connect(connStr).then(() =>{

    const app = express();

    app.use(bodyParser.urlencoded({ extended: true }));

    app.get('/',(req,res)=>{
        res.redirect('/students');
    });

    app.get('/students',async (req,res)=>{
        students = await Student.find();
        res.send(students);
    });

    app.get('/students/:RollNo',async(req,res)=>{

        students = await Student.findOne({RollNo:req.params.RollNo});
        res.send(students);

    })

    app.get('/students/serch/:name',async(req,res)=>{

        const ans = await Student.find({
            "Name":{
                $regex : req.params.name
            }
        });
        res.send(ans);
    });
    
    app.post('/students',async(req,res)=>{

        stu = new Student(req.body);
        await stu.save();
        res.send(stu);

    });

    app.delete('/students/del/:id',async (req,res)=>{

        student = await Student.findByIdAndDelete(req.params.id);

        if(!student){
            return res.send("Student with "+req.params.id+"not found!!");

        }

        res.send("Student with "+req.params.id+"deleted!!");

    });

    app.patch('/students/update/:rollno',async(req,res)=>{
        
        const oldobj = await Student.findOne({"RollNo":req.params.rollno});

        newobj = req.body;

        for(key in oldobj){

            if(newobj[key]){
                oldobj[key] = newobj[key];
            }
        }

        await oldobj.save();
        res.send("Values updated!!");

    })


    app.listen(process.env.Port,()=>{
        console.log("Server started at : ",process.env.Port);
    })

});