import React, { useState } from 'react'
import Button from '../components/Button'
import Form from '../components/Form'
import InputText from '../components/InputText'
import { Link,useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
export default function LoginForm() {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [errors, setError] = useState();
    const [loading, setLoading] = useState();
    const navigate = useNavigate();

    const {login} = useAuth();
    async function handleSubmit(e){
        e.preventDefault();

        try {
            setError('');
            setLoading(true);
            await login(email,password);
            navigate('/')
        } catch (error) {
            console.log(error);
            setLoading(false);
            setError('Failed to login in account!');
        }
    }
  return (
    <Form style={{height:'330px'}} onSubmit={handleSubmit}>
        <InputText type="text" placeholder="Enter Email" icon="alternate_email" value={email} onChange={(e)=> setEmail(e.target.value)}/>
        <InputText type="password" placeholder="Enter password" icon="lock" value={password} onChange={(e)=> setPassword(e.target.value)}/>
        <Button type="submit" disabled={loading}><span>LogIn</span> </Button>
        {errors && <p className='error'>{errors}</p>}
        <div className="info">Don't have an account? <Link to="/signup">Signup</Link> instead.</div>
   </Form>
  )
}
