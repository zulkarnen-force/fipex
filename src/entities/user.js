import mongoose  from 'mongoose'
import { Schema } from 'mongoose';
import bcryptPassword from '../utils/bcrypt.js';

const userSchema = new Schema({
  id: {
    type:String,
  },
  email: {
    type: String,
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

userSchema.pre("save", function (next) {
  if (this.password && this.isModified("password")) {
    try {
      this.password = bcryptPassword.hashPassword(this.password)
      console.log('preload ', this.password)
      next()
    } catch (err) {
      next(err)
    }
  }
})

const User = mongoose.model('User', userSchema);

export default User