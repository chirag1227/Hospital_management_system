import mongoose from "mongoose";
import validator from "validator";

const userSchema=new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        validate:[validator.isEmail],
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    nic:{
        type:String,
        required:true
    },
    dob:{
        type:Date,
        required:true
    },
    gender:{
        type:String,
        enum:["male","female"],
        required:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        enum:["Patient","Admin","Doctor"],
        required:true
    }

});

export const User=new mongoose.model("user",userSchema);