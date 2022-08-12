var express=require('express')
var bodyParser=require('body-parser')
var app =express()

app.use(bodyParser.urlencoded({ extended: false }))


app.use(bodyParser.json())

app.post('/read',(req,res)=>{
    var getName=req.body.name
    var getRoll=req.body.roll
    res.json({"name":getName,"roll":getRoll})

})
app.listen(7000,()=>{
    console.log("server started at http://localhost:7000/read")
})