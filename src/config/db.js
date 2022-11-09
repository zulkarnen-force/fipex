import { mongoose } from "mongoose"

async function connectDB() {
  
  try {
    let db = await mongoose.connect(process.env.URI_DB);
    return db
  } catch (err) {
    throw err
  }

}

export default connectDB 