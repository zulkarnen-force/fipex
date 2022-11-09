import express from "express"
import User from "../entities/user.js"
import Repository from "../repositories/repository.js"
import Service from "../services/service.js"

let userController = express.Router()

let userRepo = new Repository(User)
let service = new Service(userRepo)

userController.post("/", async function(req, res) {
    try {
        let result = await service.create(req.body)  
        res.json(result)
    } catch (err) {
        res.status(400).json({
            error: err.message
        })
    }
})


userController.get("/", async function(req, res) {
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


userController.get("/:id", async function(req, res) {
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

export default userController