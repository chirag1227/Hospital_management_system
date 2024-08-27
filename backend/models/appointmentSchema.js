import mongoose from "mongoose";
import validator from "validator";
// import isEmail from "validator/lib/isEmail";


const appointmentSchema=new mongoose.Schema({
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
        required:true,
        validate:[validator.isEmail]
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
        required:true
    },
    appointmentDate:{
        type:Date,
        required:true
    },
    department:{
        type:String,
        required:true
    },
    doctor:{
        firstName:{
            type:String,
            required:true
        },
        lastName:{
            type:String,
            required:true
        }
    },
    hasVisited:{
        type:Boolean,
        default:false
    },
    address:{
        type:String,
        required:true
    },
    doctorId:{
        type:mongoose.Schema.ObjectId,
        ref:'Doctor',
        required:true
    },
    patientId:[{
        type:mongoose.Schema.ObjectId,
        ref:'User',
        required:true
    }],
    status:{
        type:String,
        enum:["pending","accepted","rejected"],
        default:"pending"
    }

});
export const Appointment=mongoose.model("appointment",appointmentSchema);