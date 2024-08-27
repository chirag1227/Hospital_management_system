import {User} from "../models/userSchema.js";
import bcrypt from "bcrypt";


export const patientRegister=async(req,res)=>{
    const register=new User(req.body);
    const isRegistered=User.findOne(req.body.email);
    if(isRegistered){
       return res.send("User already exists");
    }

    if(!(register)){
        return res.send("Please fill full form",register)
    }
    else {
        const result=await register.save();
        res.send(result);
    }
};

export const LogIn=async(req,res)=>{
    try {
        let loginUser=await User.findOne({email:req.body.email,password:req.body.password});        
        
        if(loginUser){
           
            loginUser.password=undefined;
            res.send(loginUser);
            
        }
        else {
           res.status(404).send("User not found");       
        }
    } catch (err){
        res.status(500).json(err);
    }
};

export const addNewAdmin=async(req,res)=>{
    const admin=User(req.body);
    const isRegistered=await User.findOne({email:req.body.email});

    if(isRegistered){
        return res.send("email already exists");
    }

    if(!(admin)){
        return res.send("Please fill the form",admin);
    }
    else {
        const result=await admin.save();
        res.send(result);
    }
};

export const addNewDoctor=async(req,res)=>{
    const doctor=User(req.body);
    const isRegistered=await User.findOne({email:req.body.email});
    if(isRegistered){
        return res.send("Doctor with this email id already exists");
    }

    if(!(doctor)){
        return res.send("Please fill the form",doctor);
    }
    else {
        const result=await doctor.save();
        res.send(result);
    }
};

export const getAllDoctors=async(req,res)=>{
    const doctors=await User.find({role:"Doctor"});
   
    if(doctors){
        return res.send(doctors);
    }
    else {
        return res.send("No doctor found");
    }

};

export const getUserDetails=async(req,res)=>{
    const user=req.register;
    if(!user){
        return res.status(404).json({
            success:false,
            message:"User not found"
        });
    }
    console.log("user found",user)
    res.status(200).json({
        success:true,
        user
    })
};

