import React from 'react'

import Illustration from '../components/Illustration'
import SignUpForm from '../components/SignUpForm'



export default function SignUp() {
  return (
    <div>
        <h1>Create an account</h1>
        <div className="column">
            <Illustration/>
            <SignUpForm/>
        </div>
    </div>
  )
}
