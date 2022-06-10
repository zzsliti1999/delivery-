const mongoose =require("mongoose")

const userShema=new mongoose.Schema({
    username:{
    type:String,
    unique:true,
    required:true,
    },
    email:{
        type:String,
        unique:true,
        required:true,
    },
    role:{
        type: String,
        default: "Basic",
        required: true,
    },
    password:{
        type:String,
        unique:true,
        required:true,
    }, 
     
})
module.exports =mongoose.model("Users",userShema)