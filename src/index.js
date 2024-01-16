// import dotenv from 'dotenv'
import connectDB from './db/index.js'
import express from 'express'
import cors from "cors"
import cookieParser from 'cookie-parser'


// Figure out .env config 
// dotenv.config({
//     path: "./env"
// })

const app = express()
app.use(cors(
    {
        origin: "*",
        credentials: true
    }
))

app.use(express.json({limit: "16kb"}))
app.use(express.static("public"))

connectDB()
.then(() => {
    app.listen(8000, () => {
        console.log("App listening on port 8000")
    })
})
.catch((err) => {
    console.log("DB CONNECTION ERROR",err)
})