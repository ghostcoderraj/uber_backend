import express from "express";
import captainModel from "../model/captain.model.js";
import {authcaptain, authUser} from "../middleware/auth.middleware.js";
import { loginValidator, registerValidator } from "../validators/user.validator.js";
import { registerCaptain } from "../controllers/captain.controller.js";

const router = express.Router();

router.post("/register",registerValidator,registerCaptain)

router.post("/login",loginValidator,loginCaptain)

router.get("/profile",authcaptain,)

router.post("/logout",authcaptain,)

export default router;