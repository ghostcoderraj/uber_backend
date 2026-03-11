import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { connectDB } from "./config/db.config.js";
import userRoutes from "./routes/user.routes.js";
import dotenv from "dotenv";


dotenv.config();
const app = express();
connectDB();
// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser());

//Base Route
app.get("/",(req,res)=>{
    res.json({message:"Welcome to the Uber Backend API"});
})

//Going to implementation our application api routes
app.use("/api/v1/users",userRoutes);


export default app;