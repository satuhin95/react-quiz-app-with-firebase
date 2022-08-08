import React from 'react'
import Nab from './Nab'
import styles from '../styles/Layout.module.css'
export default function Layout({children}) {
  return (
    <>
    <Nab/>
    <div className={styles.main}>
        <div className={styles.container}>
            {children}
        </div>
    </div>
    </>
  )
}
