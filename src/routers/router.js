import express from 'express'
import authController from '../controllers/auth.controller.js'
import userController from '../controllers/userController.js'

const router = express.Router()

router.use("/users", userController)
router.use("/auth", authController)

export default router