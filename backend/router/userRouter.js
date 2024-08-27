import express from "express";
import { LogIn, patientRegister,addNewAdmin, addNewDoctor, getAllDoctors, getUserDetails } from "../controller/userController.js";


const router=express.Router();


router.post("/patientregister",patientRegister);
router.post("/login",LogIn);
router.post("/addnewadmin",addNewAdmin);
router.post("/addnewdoctor",addNewDoctor);

router.get("/getalldoctors",getAllDoctors);
router.get("/getuserdetails",getUserDetails);


export default router;


