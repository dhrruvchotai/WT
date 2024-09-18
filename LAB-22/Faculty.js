const mongoose = require('mongoose');
const express = require("express");
const bodyParser = require('body-parser');
require('dotenv').config();
const cors = require('cors');




const schema = mongoose.Schema({
    Id: Number,
    Name: String,
    Salary: Number
})


const Faculty = mongoose.model("Faculty", schema);

const connStr = "mongodb+srv://" + process.env.user + ":" + process.env.Password + "@cluster0.5ssmx.mongodb.net/faculties"

mongoose.connect(connStr).then(() => {

    const app = express();
    app.use(bodyParser.json());
    app.use(cors());

    app.get('/', (req, res) => {
        res.redirect('/faculties');
    })

    app.get('/faculties', async(req, res) => {
        const ans = await Faculty.find();
        res.json(ans);
    })

    app.get('/faculties/:id', async(req, res) => {
        const ans = await Faculty.findOne({ Id: req.params.id });

        if (ans) {
            res.send(ans);
        } else {
            res.send("Can't Find!!");
        }
    });

    app.get('/faculties/serch/:sal', async(req, res) => {

        const ans = await Faculty.find({
            "Salary": {
                $regex: req.params.sal
            }
        });

        res.send(ans);
    });

    app.post('/faculties', async(req, res) => {

        console.log(req.body);
        res.json("Hello");
        // const fac = new Faculty(req.body);
        // await Faculty.save();
        // res.send(fac);

    })

    app.patch('/faculties/update/:id', async(req, res) => {

        const oldobj = await Faculty.findOne({ "Id": req.params.id });

        const newobj = req.body;

        for (key in oldobj) {

            if (newobj[key]) {
                oldobj[key] = newobj[key];
            }
        }

        res.send(oldobj);
        // await oldobj.save();
    });



    app.listen(process.env.Port, () => {
        console.log("Server started at : ", process.env.Port);
    })
})