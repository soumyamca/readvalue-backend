var express=require('express')
var bodyParser=require('body-parser')
var mongoose = require('mongoose');
var {studentModel}=require('./models/studentModel')
var app =express()

app.use(bodyParser.urlencoded({ extended: false }))


app.use(bodyParser.json())
app.get('/',(req,res)=>{
    res.send("welcome to my wesite ")
})

app.post('/read',(req,res)=>{
    var studentObject=new studentModel(req.body);
    var getName=req.body.name
    var getRoll=req.body.roll
    var getAdmn=req.body.admno
    var getCollege=req.body.college
    res.json(studentObject)

    app.post('/add',(req,res)=>{
        var getNum1=parseFloat(req.body.num1 )
        var getNum2=parseFloat(req.body.num2 )
        var result=getNum1+getNum2
        res.json({"result":result})
    })

})
app.listen(process.env.PORT||3000,()=>{
    console.log("server started at http://localhost:3000/read")
})