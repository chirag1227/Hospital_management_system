import express from "express";

import {sendMessage,getAllMessages} from "../controller/messageController.js";

const router=express.Router();

router.post("/sendmessage",sendMessage);
router.get("/getallmessages",getAllMessages);


export default router;