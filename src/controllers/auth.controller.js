import express, { json } from "express"




import User from "../entities/user.js"
import Repository from "../repositories/repository.js"
import Service from "../services/service.js"
import generateAccessToken from "../utils/jwt.js"

let authController = express.Router()

let userRepo = new Repository(User)
let service = new Service(userRepo)

authController.post("/", async function(req, res) {
    const {email} = req.body

    try {
        // let result = await service.getById(req.body)  
        let token = generateAccessToken({email})
        console.log(token)
        res.json(token)
    } catch (err) {
        res.status(400).json({
            error: err.message
        })
    }

})


authController.get("/", async function(req, res) {
    try {
        let result = await service.getAll()
        return res.status(200).json({
            data: result
        })
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