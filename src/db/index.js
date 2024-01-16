import mongoose from "mongoose"
import { DB_NAME } from "../constants.js"

const connectDB = async() => {
    try{
        await mongoose.connect(`mongodb+srv://aujaschaudhry:bansilal@cluster0.jokgbcu.mongodb.net/?retryWrites=true&w=majority`)
        console.log("DB CONNECTED")
    }
    catch(err){
        console.log(err)
        throw err
    }
}

export default connectDB