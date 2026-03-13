import userModel from "../model/user.model.js"
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { message } from "statuses";
import captainModel from "../model/captain.model.js";
import contentDisposition from "content-disposition";


export const authUser = async (req,res,next) => {
    const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
    if(!token){
        return res.status(401).json({message:"Unauthorized"})
    }

    try{
        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        const user = await userModel.findById(decoded._id);
        req.user = user

        return next()
    }catch(error){
        return res.status(401).json({message:"Unauthorized"})
    }
}

export const authcaptain = async(req,res,next)=>{
    const token = req.cookies.token || req.headers.authorization?.split(" ")[1];

    if(!token){
        return res.status(401).json({message:"Unauthorized"})
    }

    try{
        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        const captain = await captainModel.findById(decoded._id);

        req.captain = captain;

        return next()
    }catch(eroor){
        console.error(eroor)
        return res.status(401).json({message:"Unauthorized"})
    }
}