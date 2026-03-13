import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { lowerCase } from "lodash";
import { match } from "node:assert";
import { type } from "node:os";
import { selectFields } from "express-validator/lib/field-selection";

const captainSchema = new mongoose.Schema({
    fullname:{
        firstname:{
            type:String,
            required:true,
            minLength:[3,"Firstname should be atleast 3 characters long"]
        },
        lastname:{
            type:String,
            minLength:[3,"Lastname should be atleast 3 characters long"]
        }
    },
    email:{
        type:String,
        required:true,
        unique:truw,
        lowerCase:true,
        match:[/^[a-zA-Z0-9._%+-]+@gmail\.com$/, "Please enter a valid Gmail address"],
        minLength:[5,"Email should be atleast 5 character long"]
    },
    password:{
        type:String,
        required:true,
        select:false
    },
    socketId:{
        type:String,
        enum:['active','inactive'],
        default:'inactive'
    },
    vehicles:{
        color:{
            type:String,
            required:true,
            minLength:[3,"Color should be atleast 3 characters long"]
        },
        plate:{
            type:String,
            required:true,
            minLength:[3,"Plate should be atleast 3 character long"]
        },
        capacity:{
            type:Number,
            required:true,
            minLength:[1,"Capacity should be atleast 1 characters long"]
        },
        vehicleType:{
            type:String,
            required:true,
            enum:["car","motorcycle","auto"]
        }
    },
    location:{
        ltd:{
            type:Number
        },
        lng:{
            type:Number,
        }
    }
})

const captainModel = mongoose.model("captainmodel",captainSchema);

captainSchema.methods.generateAuthToken = function (){
    const token = jwt.sign({_id:this._id},process.env.JWT_SECRET,{expiresIn:"24h"});
    return token
}

captainSchema.methods.comparePassword = async function (enteredPassword){
    return await bcrypt.compare(enteredPassword,this.password);
}

captainSchema.statics.hashPassword = async function (password){
    return await bcrypt.hash(password,10)
}

export default captainModel;

