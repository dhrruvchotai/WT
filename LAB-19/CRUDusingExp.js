const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded());

const students = [
    {
        id : 101,
        name : "Dhruv",
        age:18
    },
    {
        id : 102,
        name : "Meet",
        age:17
    },
    {
        id : 103,
        name : "Om",
        age:19
    },
]

app.get('/students',(req,res)=>{
    res.send(students);
});


app.get('/students/:id',(req,res)=>{

    const index = students.findIndex((stu)=>{

        if(stu.id == req.params.id){
           return true;
        }

    });

    res.send(students[index]);
  
})


app.post('/students',(req,res)=>{

    const{id,name,age} = req.body;

    console.log(req.body);

    let newObj = {
        id : id,
        name : name,
        age : age
    }

    students.push(newObj);
    console.log(newObj);

    res.send("Student added!!");

});

app.delete('/students/:id',(req,res)=>{

    const index = students.findIndex((stu)=>{
        if(stu.id == req.params.id){
            return true;
        }
    });

    students.splice(index,1);
    res.send("Student removed!!");

});

app.patch('/students/:id',(req,res)=>{

    const index = students.findIndex((stu)=>{
        if(stu.id == req.params.id){
            return true;
        }
    });

   students[index] = req.body;
   res.send("Details Updated!!");

})

app.listen(3400,()=>{
    console.log("Sever Started!!")
})