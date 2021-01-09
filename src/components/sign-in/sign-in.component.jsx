import React, { useState } from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component'

import './sign-in.styles.scss';

const SignIn = () => {

  const [ userCredentials, setCredentials ] = useState({
    email: '',
    password: ''
  })

  const { email, password } = userCredentials

  const handleSubmit = (e) => {
    e.preventDefault();
    setCredentials({
      email: '',
      password: ''
    })
  };

  const handleChange = (e) => {
    e.preventDefault();
    debugger
    const { value, name } = e.target;

    setCredentials({ 
      ...userCredentials,
      [name]: value 
    });
  };

  return (
    <div className="sign-in">
      <h2>Sign In</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          value={email}
          handleChange={handleChange}
          label="email"
          required
        />
        <FormInput
          name="password"
          type="password"
          value={password}
          handleChange={handleChange}
          label="password"
          required
        />
        <CustomButton type='submit'> Sign in </CustomButton>
      </form>
    </div>
  )
};

export default SignIn;