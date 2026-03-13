import express from "express";
import captainModel from "../model/captain.model.js";
import {authUser} from "../middleware/auth.middleware.js";
import { loginValidator, registerValidator } from "../validators/user.validator.js";
import { registerCaptain } from "../controllers/captain.controller.js";

const router = express.Router();

router.post("/register",registerValidator,registerCaptain)

router.post("/login",loginValidator,loginCaptain)

router.post("/profile",)

router.post("/logout")

export default router;