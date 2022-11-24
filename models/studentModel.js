var mongoose = require('mongoose');
var studentSchema=new mongoose.Schema(
    {
        name:{type:String,require:true},
        roll:{type:Number,require:true},
        admno:{type:Number,require:true},
        college:{type:String,require:true},
    }



);
var studentModel=mongoose.Model('students',studentSchema);
module.exports={studentModel}