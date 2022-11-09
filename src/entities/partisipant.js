import mongoose  from 'mongoose'
import { Schema } from 'mongoose';

const schema = new Schema({
  id:{
    type:String,
  },
  category:{
    type: String,
    required: true,
  },
  createdAt: Date,
  updatedAt: Date,
});


const Participant = mongoose.model('Participant', schema);

export default Participant