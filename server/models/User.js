import mongoose from "mongoose";
import validator from "validator";
import bcryptjs from "bcryptjs";


const UserSchema = new mongoose.Schema({
  name:{
    type:String,
    required:[true,'Please provide name'],
    minlength:4,
    maxlength:25,
    trim:true
  },
  email:{
    type:String,
    required:true,
    validate:{
      validator:validator.isEmail,
      message:'Please provide a valid email address'
    },
    unique:true
  },
  password:{
    type:String,
    required:[true,'Please provide password'],
    minlength:6,
    select:false
  }
});

UserSchema.pre('save',async function() {
  const salt = await bcryptjs.genSalt(10)
  this.password = await bcryptjs.hash(this.password,salt)
});

export default mongoose.model('User',UserSchema);