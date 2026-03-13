import { validationResult } from "express-validator";
import captainModel from "../model/captain.model.js";
import bcrypt from "bcrypt";
import { message } from "statuses";

export const registerCaptain = async (req,res) => {
    try{
        const error = validationResult();
        if(!error.isEmpty()){
            return res.status(400).json({error:error.array()})
        }

        const {fullname,email,password,vehicle} = req.body;

        const iscaptainAlreadyExists = await captainModel.findOne({email});
        if(iscaptainAlreadyExists){
            return res.status(400).json({message:"Captain already exists"});
        }
        
        const hashedPassword = await captainModel.hashedPassword(password);

        const captain = await createCaptain({
            firstname:fullname.firstname,
            lastname:lastname.lastname,
            email,
            password:hashedPassword,
            color:vehicle.color,
            plate:vehicle.plate,
            capacity:vehicle.capacity,
            vehicleType:vehicle.vehicleType,
        })
        
        const token = captain.generateAututhToken();
        return res.status(201).json({token,captain})

    }catch(error){
        console.log(error)
        return res.status(500).json({message:"Internal server error"})
    }
}

