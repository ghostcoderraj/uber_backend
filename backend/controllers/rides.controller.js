import { validationResult } from "express-validator";
import { createRideService, getFareService, confirmRideService, startRideService, endRideService } from "../services/rides.services.js";
import { getAddressCoordinate, getAutoCompleteSuggestions, getDistanceTime, getCaptainInTheRadius, getCaptainInTheRadius } from "../services/map.services.js";
import rideModel from "../model/ride.model.js";
import { error } from "console";


export const createRide = async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }

    const {userId, pickup , destination , vehicleType } = req.body;

    try{
        const ride = await createRideService({user:req.user._id, pickup , destination , vehicleType})

        res.status(201).json(ride)

        const pickupCoordinates = await getAddressCoordinate(pickup);

        const captainInTheRadius = await getCaptainInTheRadius(pickupCoordinates.lat , pickupCoordinates.lng , 2);

        ride.otp = "";

        const rideWithUser = await rideModel.findOne({_id:ride._id}).populate("user");

        captainInTheRadius.map(captain => {

            sendMessageToSocketId(captain.socketId, {
                event: "new-ride",
                data: rideWithUser
            })
        })


    }catch(error){
        console.log(error);
        res.status(404).json({error: "Ride not created"})
    }
}

export const getFare = async (req, res) => { 
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }

    const {pickup,destination} = req.body;

    try{
        const fare = await getFareService(pickup , destination);

        res.status(404).json({errors: "Fare not found"})
    }catch(error){
        console.log(error)
        res.status(404).json({error:"Fare not found"})
    }
}

export const confirmRide = async (req, res) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(404).json({errors:errors.array()})
    }

    try{
        const {rideId} = req.body;

        const ride = await confirmRideService({rideId , captain:req.captain})

        sendMessageToSocketId(ride.user.socketId,{
            event: "new-ride",
            data: ride
        })

        return res.status(200).json(ride)
    }catch(error){
        console.log(error);
        return res.status(404).json({error:"ConfirmRide not found "})
    }
}

export const startRide = async (req, res) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(404).json({errors:errors.array()})
    }

    try{
        const {rideId , otp} = req.body;

        const ride = await startRideService({rideId , otp , captain:req.captain});
    
        sendMessageToSocketId(ride.user.socketId, {
            event: 'ride-started',
            data: ride
        })

        return res.status(200).json({error: "Ride not found"})

    }catch(error){
        console.log(error);
        res.status(404).json({error: " Ride not found"})
    }


}

export const endRide = async (req, res) => { 
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(404).json({errors:errors.array()});
    }
    
    const {rideId} = req.body;

    try{
        const ride = await endRideService({rideId,captain:req.captain});

        sendMessageToSocketId(ride.user.socketId, {
            event: 'ride-ended',
            data:ride
        })
    }catch(error){
        console.log(error)
        return res.status(404).json({error:"Ride not found"})
    }
}

