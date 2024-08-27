import express  from "express";
import {dbConnection} from "./database/dbConnection.js";
import cookieParser from "cookie-parser";
import cors from "cors";
// import fileUpload from "express-fileUpload";
import messageRouter from "./router/messageRouter.js";
import appointmentRouter from "./router/appointmentRouter.js";
import userRouter from "./router/userRouter.js";

const app=express();
app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:true}));



app.use("/api/v1/message", messageRouter);
app.use("/api/v1/appointment", appointmentRouter);
app.use("/api/v1/user",userRouter);

dbConnection();

export default app;