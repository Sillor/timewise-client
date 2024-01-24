import React from 'react';
import './Login.css';
import FormInput from '../../components/form-components/FormInput';
import Button from '../../components/button-component/Button';


function SignIn() {
    return (
      <div className='text-center'>
        <h1 className='text-4xl mb-8 font-bold lg:text-6xl lg:mb-10'>Sign In</h1>
        <form>
        <FormInput
            type="email"
            placeholder="Email Address"
          />
        <FormInput
            type="password"
            placeholder="Password"
          />
        <h2> <a className='text-xs lg:text-xs text-sky-500 underline pl-28 lg:pl-28' href='/resetpassword'> Forgot your password?</a></h2>
        <Button 
          text={"Sign In"}
        />
        </form>
        <h2 className='mt-2.5'>New user? <a className='text-sky-500 underline' href='/register'>Sign up</a></h2>
      </div>
    );
  }
  export default SignIn