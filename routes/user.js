import express from "express";
import { getMyProfile, login, logout, register } from "../controllers/user.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.post("/new", register)

router.post("/login",login)

router.get("/logout", logout)

router.get("/me", isAuthenticated, getMyProfile)

// Above line is equivalent to below three lines

// router.get("/userid/:id", getUserDetail)
// router.put("/userid/:id", updateUser)
// router.delete("/userid/:id", deleteUser)

export default router