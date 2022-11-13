import React, { useEffect,useState } from 'react';
import FormInput from '../components/FormInput';
import { REGISTER_USER_BEGIN } from '../context/actions';
import { useAppContext } from '../context/appContext';
import {useNavigate} from 'react-router-dom';

const initialState = {
  name: '',
  email: '',
  password: '',
  isMember:true
}

const Register = () => {
  
  const [values,setValues] = useState(initialState);

  const {registerUser,user,loginUser} = useAppContext();
  const navigate = useNavigate();

  const handleChange = e => {
    setValues({...values,[e.target.name]:e.target.value})
  }

  const toggleMember = () => {
    setValues({...values,isMember:!values.isMember})
  }

  const handleSubmit = e => {
    e.preventDefault()
    
    const {name, email, password, isMember} = values;

    if(!email || !password || (!isMember && !name)){
      return
    }
      const currentUser = {name, email, password}

      if(isMember){
        loginUser(currentUser)
      } else {
        registerUser(currentUser)
      }
  }

  useEffect(() => {
    if(user) {
      setTimeout(() => {
        navigate('/')
      },3000)
    }
  },[user,navigate])

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>{values.isMember ? 'Login' : 'Register'}</h1>

        {!values.isMember && (
          <FormInput
            type='text'
            value={values.name}
            name='name'
            handleChange={handleChange}
          />
        )}
        

        <FormInput
          type='email'
          value={values.email}
          name='email'
          handleChange={handleChange}
        />

        <FormInput
          type='password'
          value={values.password}
          name='password'
          handleChange={handleChange}
        />

        <button type='submit'>Submit</button>
        <p>
          {!values.isMember ? 'Already a member?' : 'Not a member yet?'}
          <button type='button' onClick={toggleMember}>{!values.isMember ? 'Login' : 'Register'}</button>
        </p>
      </form>
    </div>
  );
};

export default Register;