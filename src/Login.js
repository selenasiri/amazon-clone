import React, { useState } from 'react'
import './Login.css'
import { Link } from 'react-router-dom'

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = e => {
    e.preventDefault();

    // firebase magic...
  }

  const register = e => {
    e.preventDefault();

    // firebase magic...
  }

  return (
    <div className='login'>
      <Link to='/'>
        <img 
          className='login_logo'
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' 
        />
      </Link> 
      <div className='login_container'>
        <h1>Sign In</h1>

        <form>
          <h5>Email</h5>
          <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

          <h5>Password</h5>
          <input type='password' value={password} onChange={e => setEmail(e.target.value)} />

          <button type='submit' onClick={signIn} className='login_signInButton'>Sign In</button>
        </form>

        <p>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please see our Privacy Nitice, our Cookies Notice and our Interest-Based Ads Notice.
        </p>

        <button onClick={register} className='login_registerButton'>Create your Amazon account</button> 
      </div> 
    </div>
  )
}

export default Login
