import { models } from "mongoose";
import rideModel from "../model/ride.model.js"
import { getAddressCoordinate, getDistanceTime ,getAutoCompleteSuggestions, getCaptainInTheRadius } from "../services/map.services.js";
import {bcrypt} from "bcrypt";
import { error } from "console";
import { getFare } from "../controllers/rides.controller.js";
import status from "statuses";

export const createRideService = async({user, pickup, destination , vehicleType}) => {
    const fare = await getFareService(pickup,destination);

    const ride = rideModel.create({
        user,
        pickup,
        destination,
        vehicleType,
        otp:getOtp(4),
        fare:fare[vehicleType]
    })

    return ride
}
export const getFareService = async(pickup,destination) => {
    if (!pickup || !destination){
        throw new Error('pickup and destination are required');
    }
    const distanceTime = await getDistanceAndTime(pickup,destination);

    const baseFare = {
        auto:30,
        car:50,
        bike:20
    }

    const perKmRate = {
        auto:10,
        car:15,
        bike:8
    }
    
    const fare = {
            auto: Math.round(baseFare.auto + (distance_km * perKmRate.auto) + (duration_min * perMinuteRate.auto)),
            car: Math.round(baseFare.car + (distance_km * perKmRate.car) + (duration_min * perMinuteRate.car)),
            bike: Math.round(baseFare.bike + (distance_km * perKmRate.bike) + (duration_min * perMinuteRate.bike))
        };

        return fare
    
}

const getOtp = async(num) => {
    function generateOtp(num){
        const otp = crypto.randomInt(Math.pow(10, num - 1),Math.pow(10,num)).toString();
        return otp
    }
    return generateOtp(num)
}


export const confirmRideService = async({rideId,captain}) => {
    await rideModel.findOneAndUpdate({
        _id:rideId
    },{
        status:"accepted",
        captain:captain._id
    })

    const ride = await rideModel.findOne({
        _id:rideId
    }).populate("user").populate("captain").select("+otp");

    return ride
}

export const startRideService = async({rideId,captain}) => {
    const ride = await rideModel.findOne({
        _id:rideId
    }).populate("user").populate("captain").select("+otp")

    if(ride.otp !== otp){
        throw new Error("Invalid otp")
    }

    if(!ride.status === "accepted"){
        throw new Error("Ride not accepted")
    }

    await rideModel.findOneAndUpdate({
        _id:rideId
    },{
        status:"ongoing"
    });

}

export const endRideService = async({rideId,captain}) => {
    const ride = await rideModel.findOne({
        _id:rideId,
        captain:captain._id
    }).populate("user").populate('captain').select("+otp");

    if(!ride){
        throw new Error('Ride not found')
    }

    if(ride.status !== "ongoing"){
        throw new Error("Ride not ongoing");
    }

    await rideModel.findOneAndUpdate({
        _id:rideId
    },{
        status:'completed'
    })

    return ride
}