import express from 'express'
import authController from '../controllers/auth.controller.js'
import userController from '../controllers/userController.js'
import authenticateToken from '../middlewares/auth.middleware.js'

const router = express.Router()

router.use("/users", authenticateToken, userController)
router.use("/auth", authController)

export default router