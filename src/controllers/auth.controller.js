import { compare } from "bcrypt"
import express, { json } from "express"
import http from "http"





import User from "../entities/user.js"
import authenticateToken from "../middlewares/auth.middleware.js"
import Repository from "../repositories/repository.js"
import Service from "../services/service.js"
import bcryptPassword from "../utils/bcrypt.js"
import generateAccessToken from "../utils/jwt.js"

let authController = express.Router()

let userRepo = new Repository(User)
let service = new Service(userRepo)

authController.post("/login", async function(req, res) {
    let {email} = req.body
    let preload = {}
    preload.email = email


    try {
        let user = await service.getByQuery({email})
        preload.id = user._id
        let isValid = bcryptPassword.comparePassword(req.body.password, user.password)
        if (isValid) {
            let token = generateAccessToken(preload)
            return res.status(200).json({
                status: http.STATUS_CODES,
                token
            })
        }
        
       
        // console.log(token)
        
    } catch (err) {
        res.status(400).json({
            error: err.message
        })
    }

})


authController.get("/", authenticateToken, async function(req, res) {
    try {
        res.status(200).json(
            req.user
        )
    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }
})


authController.get("/:id", async function(req, res) {
    let id = req.params.id

    try {
        let result = await service.getById(id)
        return res.status(200).json({
            data: result
        })
    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }
})

export default authController