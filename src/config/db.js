import { mongoose } from "mongoose"

async function getDB() {
  
  try {
    let db = await mongoose.connect('mongodb://127.0.0.1:27017/fipex');
    return db
  } catch (err) {
    throw err
  }

}

export default  getDB 