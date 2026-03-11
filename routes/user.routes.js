import express from "express";
import {registerValidator} from "../validators/user.validator.js"
import { registerUser } from "../controllers/user.controller.js";
import { loginValidator } from "../validators/user.validator.js";
import { loginUser } from "../controllers/user.controller.js";
import { authUser } from "../middleware/auth.middleware.js";

const router = express.Router();



router.post("/register" , registerValidator, registerUser)

router.post("/login",loginValidator, loginUser)

router.post("/profile",authUser , getUserProfile)

router.post("/logout", authUser , logoutUser)

export default router;