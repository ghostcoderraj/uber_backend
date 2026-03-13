import { message } from "statuses"
import captainModel from "../model/captain.model"

export const createCaptain = async(firstname,lastname,email,password,color,plate,vehicleType,capacity) => {
    if(!firstname || !lastname || !email || !password || !color || !plate || !vehicleType || !capacity){
        return res.status(400).json({message:"All fields are required"})
    }

    const captain = captainModel.create({
        fullname:{
            firstname,
            lastname
        },
        email,
        password,
        vehicleType,
        capacity,
});
return captain
}