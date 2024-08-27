import express from "express";

import {  postAppointment,getAllAppointments,updateAppointmentStatus,deleteAppointment} from "../controller/appointmentController.js";

const router=express.Router();

router.post('/postappointment',postAppointment);
router.get('/getappointments',getAllAppointments);

router.put('/updateappointmentstatus/:id',updateAppointmentStatus);
router.delete('/deleteappointment/:id',deleteAppointment);



export default router;