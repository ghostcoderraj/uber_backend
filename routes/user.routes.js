import express from "express";
import {registerValidator} from "../validators/user.validator.js"
import { registerUser } from "../controllers/user.controller.js";

const router = express.Router();



router.post("/register" , registerValidator, registerUser)

router.post("/login",(req,res)=>{
    res.send('login working successfully')
})

// router.post("/profile")

// router.post("/logout")

export default router;