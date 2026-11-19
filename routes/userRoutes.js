import express from "express"

import authMiddleware from "../middlewares/authMiddleware.js"

import adminMiddleware from "../middlewares/adminMiddleware.js"

import userController from "../controllers/userController.js"

const router = express.Router()

router.get("/me", authMiddleware,userController)
