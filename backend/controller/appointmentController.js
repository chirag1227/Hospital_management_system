import { Appointment } from "../models/appointmentSchema.js";
console.log("outside")
export const postAppointment=async(req,res)=>{
    console.log("inside function");
    const appointment=new Appointment(req.body);
    console.log("inside appointment",appointment)

    if(!appointment){
        return res.send("please fill the form");
    }
    else {
        const result=await appointment.save();
        res.send(result);
    }
};

export const getAllAppointments=async(req,res)=>{
    let appointments=await Appointment.find();
    if(appointments){
        return res.send(appointments);
    }
    else{
        return res.send("No appointments found");
    }
};

export const updateAppointmentStatus=async(req,res)=>{
    let appointment=await Appointment.findById(req.params.id);
    if(!appointment){
        return res.send("Appointment not found");
    }
    appointment=await Appointment.findByIdAndUpdate(
        req.params.id,
        req.body,
    {new:true});
    res.send(appointment);
};

export const deleteAppointment=async(req,res)=>{
    let appointment=await Appointment.findByIdAndDelete(req.params.id);
    if(!appointment){
        return res.send("Appointment not found");
    }
    else {

        return res.send(appointment);
    }
};