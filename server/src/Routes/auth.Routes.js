import express from "express";
import {signup ,logout, login} from "../controllers/authController.js";
const router = express.Router();


router.post("/signup",signup)
router.post("/logout",logout)
router.post("/login",login)

export default router;
