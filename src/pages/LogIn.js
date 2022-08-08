import React from 'react'
import Illustration from '../components/Illustration'
import LoginForm from '../components/LoginForm'
export default function LogIn() {
  return (
    <>
        <h1>Login to your account</h1>
        <div className="column">
          <Illustration/>
           <LoginForm/>

        </div>
    </>
  )
}
