import express from 'express'
import dotenv from 'dotenv'
import http from 'http'
import router from "./src/routers/router.js"
import connectDB from "./src/config/db.js"
import WebSocket from './src/socket/wsserver.js'
import { Server } from 'socket.io'



dotenv.config()




let app = express()
let server = http.createServer(app)

let io = new Server(server, { cors: { origin: '*' } })

io.on("connection", socket => {
    console.log('[info] connection web socket established')    

    socket.on("message", (msg) => {
        console.log('[ws] message from client: ' + msg)
    })

    socket.on('request', (msg) => {
        console.log(`[ws request] ${msg}`, msg)
    })

    

    socket.emit("response", "hello this response from server")
})




app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(router)

// server.listen(3001)
app.listen(null, async () => {
    console.log('Server started on http://localhost:'+process.env.PORT)
    console.log('Press Ctrl-C to terminate...')
    await connectDB()
})

server.listen(process.env.PORT)