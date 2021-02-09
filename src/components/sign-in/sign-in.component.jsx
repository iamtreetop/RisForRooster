import React, { useState } from 'react';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component'

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
import { googleSignInStart } from "../../redux/user/user.actions";

import './sign-in.styles.scss';

const SignIn = ({ googleSignInStart }) => {

  const [ userCredentials, setCredentials ] = useState({
    email: '',
    password: ''
  })

  const { email, password } = userCredentials

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      await auth.signInWithEmailAndPassword(email, password);
      
      setCredentials({
        email: '',
        password: ''
      })
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    e.preventDefault();

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
        <div className='buttons'>
          <CustomButton type='submit'> Sign in </CustomButton>
          <CustomButton 
            type="button" 
            onClick={googleSignInStart} 
            isGoogleSignIn> 
            Google
          </CustomButton>
        </div>
      </form>
    </div>
  )
};

const mapDTP = dispatch => {
  return ({
    googleSignInStart: () => dispatch(googleSignInStart())
  });
};

export default connect(
  null,
  mapDTP
)(SignIn);