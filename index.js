import express from 'express'
import dotenv from 'dotenv'
import router from "./src/routers/router.js"

dotenv.config()

let app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(router)


app.listen(process.env.PORT, async () => {
    console.log('Server started on http://localhost:'+process.env.PORT)
    console.log('Press Ctrl-C to terminate...')
})