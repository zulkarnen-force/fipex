import express from 'express'
import dotenv from 'dotenv'
import http from 'http'
import router from "./src/routers/router.js"
import makeWebSocket from './src/socket/wsserver.js'

dotenv.config()


let app = express()
let server = http.createServer(app)
makeWebSocket(server)


app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(router)

// server.listen(3001)
// app.listen(process.env.PORT, async () => {
//     console.log('Server started on http://localhost:'+process.env.PORT)
//     console.log('Press Ctrl-C to terminate...')
//     await connectDB()
// })

server.listen(3000)