import React, { useState } from 'react'
import InputText from '../components/InputText'
import Button from '../components/Button'
import CheckBox from '../components/CheckBox'
import Form from '../components/Form'
import { Link,useNavigate  } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
export default function SignUpForm() {
    const [username,setUsername] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [confirmPassword,setConfirmPassword] = useState('');
    const [agree,setAgree] = useState('');
    const [errors, setError] = useState();
    const [loading, setLoading] = useState();
    const navigate = useNavigate();

    const {signup} = useAuth();
    async function handleSubmit(e){
        e.preventDefault();
        if(password !== confirmPassword){
            return setError("Password don't match!");
        }
        try {
            setError('');
            setLoading(true);
            await signup(email,password,username);
            navigate('/')
        } catch (error) {
            console.log(error);
            setLoading(false);
            setError('Failed to create an account!');
        }
    }



  return (
    <>
        <Form style={{height:'500px'}} onSubmit={handleSubmit}>
        <InputText type="text" placeholder="Enter name" required icon="person" value={username} onChange={(e)=> setUsername(e.target.value)}/>
        <InputText type="text" placeholder="Enter Email" required icon="alternate_email" value={email} onChange={(e)=> setEmail(e.target.value)}/>
        <InputText type="password" placeholder="Enter password" required icon="lock" value={password} onChange={(e)=> setPassword(e.target.value)}/>
        <InputText type="password" placeholder="Confirm password" required icon="lock_clock" value={confirmPassword} onChange={(e)=> setConfirmPassword(e.target.value)}/>
        <CheckBox text=" I agree to the Terms &amp; Conditions" required value={agree} onChange={(e)=> setAgree(e.target.checked)}/>
        <Button type="submit" disabled={loading}><span>Submit Now</span> </Button>
        {errors && <p className='error'>{errors}</p>}
        <div className="info"> 
            Already have an account? <Link to="/login">Login</Link> instead.
        </div>
  </Form>
    </>
  )
}
