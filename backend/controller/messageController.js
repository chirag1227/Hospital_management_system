import { Message } from "../models/messageSchema.js";



export const sendMessage=async(req,res)=>{
        console.log("inside sendMessage")
        const message=new Message(req.body);
          console.log("messages",message)

    if(!(message)){
        return res.send("please fill the form ");

    }
    else {
        const result=await message.save();
        res.send(result);
    }
};


export const getAllMessages=async(req,res)=>{
    let messages=await Message.find();
    if(messages){
        return res.send(messages);
    }
    else {
        return res.send("No Messages found ");
    }
};