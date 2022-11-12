import mongoose from "mongoose";


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

export default mongoose.model('User',UserSchema);