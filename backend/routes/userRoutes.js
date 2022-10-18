import express from "express";
const router = express.Router();
import { registerUser, getUser } from "../controllers/userController.js";

router.post("/register", registerUser);
router.get("/get", getUser);

export default router