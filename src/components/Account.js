import React from 'react'
import styles from '../styles/Account.module.css'
import { Link } from 'react-router-dom'
import {useAuth} from '../contexts/AuthContext'
export default function Account() {
  const {currentUser,logout } = useAuth();
  return (
    <div className={styles.account}>
    <span className="material-icons-outlined" title="Account">
      account_circle
    </span>
    
    {currentUser ? (
      <>
      <span>{currentUser.displayName}</span>
       <span className="material-icons-outlined" title="Logout" onClick={logout}> logout </span> 
      </>
    ):(
      <>
        <Link to="/signup">Signup</Link>
        <Link to="/login">LogIn</Link>
      </>
    )}
    
  </div>
  )
}
