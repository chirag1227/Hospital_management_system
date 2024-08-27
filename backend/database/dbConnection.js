import mongoose from "mongoose";

export const dbConnection = ()=> {
    mongoose.connect("mongodb://localhost:27017/myapp")
    .then(()=>{
        console.log("Connected to database!!");
    })
    .catch((err)=>{
        console.log("Some error occur while connecting to database",err);
    });
};