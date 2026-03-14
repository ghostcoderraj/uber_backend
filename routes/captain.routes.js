import express from "express";
import captainModel from "../model/captain.model.js";
import {authCaptain, authUser} from "../middleware/auth.middleware.js";
import { loginValidator, registerValidator } from "../validators/user.validator.js";
import { getCaptainProfile, loginCaptain, logoutCaptain, registerCaptain } from "../controllers/captain.controller.js";

const router = express.Router();

router.post("/register",registerValidator,registerCaptain)

router.post("/login",loginValidator,loginCaptain)

router.get("/profile",authCaptain,getCaptainProfile)

router.post("/logout",authCaptain,logoutCaptain)

export default router; 