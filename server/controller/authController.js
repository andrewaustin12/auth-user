import User from '../models/User.js';


const register = async(req,res) => {
  try {
    const {name,email,password} = req.body
    const user = await User.create({name,email,password})
    const token = user.createJWT()

    res.status(201).json({user:{email:user.email,name:user.name},token});
  }
  catch(error) {
    res.status(500).json({msg:'an error occurred'})
  }
};

const login = async(req,res) => {
  res.send('login')
};

export {register,login};