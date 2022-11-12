import React, { useEffect,useState } from 'react';
import FormInput from '../components/FormInput';

const initialState = {
  name: '',
  email: '',
  password: '',
  isMember:true
}

const Register = () => {
  
  const [values,setValues] = useState(initialState);

  const handleChange = e => {
    console.log(e.target)
  }

  const toggleMember = () => {
    setValues({...values,isMember:!values.isMember})
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log(e.target)
  }

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