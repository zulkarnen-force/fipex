import mongoose  from 'mongoose'
import { Schema } from 'mongoose';

const userSchema = new Schema({
  id:{
    type:String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique:true
  },
  displayName: String,
  password: {
    type: String,
  },
  phoneNumber:   String,
  emailVerfied: Boolean,
  disabled:   Boolean,
  photoURL:   String,
  createdAt: Date,
  updatedAt: Date,
});


const User = mongoose.model('User', userSchema);



export default User