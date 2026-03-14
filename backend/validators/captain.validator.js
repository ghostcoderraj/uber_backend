import { body } from "express-validator";

export const registerValidator = [
    body("email").isEmail().withMessage('Invalid email'),
    body("fullname.firstname").isLength({min:3}).withMessage('First name must be at least 3 characters long'),
    body("fullname.firstname").isLength({min:3}).withMessage("Password must be at least 6 characters long"),
    body("password").isLength({min:6}).withMessage("Password must be at least 6 chracters long"),
    body("vehicles.color").isLength({min:3}).withMessage("Color must be atlest 3 characters long"),
    body("vehicles.plate").isLength({min:3}).withMessage("Plate must be atleast 3 characters login"),
    body("vehicles.capacity").isInt({min:1}).withMessage("Capacity must at least 1"),
    body('vehicles.vehicleTpe').isIn(["car","motorcycle","auto"]).withMessage('Invalid vehicle type')
]
 