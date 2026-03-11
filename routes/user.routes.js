import express from "express";
import { registerValidator, loginValidator } from "../validators/user.validator.js";
import { registerUser, loginUser, logoutUser, getUserProfile } from "../controllers/user.controller.js";
import { authUser } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/register", registerValidator, registerUser);
router.post("/login", loginValidator, loginUser);
router.get("/profile", authUser, getUserProfile);
router.post("/logout", authUser, logoutUser);

export default router;