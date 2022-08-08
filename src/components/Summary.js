import React, { useMemo } from 'react'
import img from '../assets/images/success.png'
import useFetch from '../hooks/useFetch'
import styles from '../styles/Summary.module.css'
export default function Summary({score,noq}) {
  const getkeyword= useMemo(()=>{
    if((score/(noq * 5)) * 100 <50){
      return "failed";
    }else if((score / (noq * 5)) * 100 <75){
      return 'good';
    }else if((score / (noq * 5))  * 100 < 100){
      return "very good";
    }else{
      return 'excellent';
    }
  },[score,noq])
  const {loading,error,result} = useFetch(`https://api.pexels.com/v1/search?query=${getkeyword}&per_page=1`,"GET",{Authorization:'563492ad6f91700001000001871ffdb1622e42c5a133367137f5beea'})
  const image = result ? result?.photos[0].src.medium: img ;
  return (
    <div className={styles.summary}>
    <div className={styles.point}>
      <p className={styles.score}>
        Your score is <br />
        {score} out of {noq * 5}
      </p>
    </div>
    {loading && <div className={styles.badge}>Loading your badge....</div>}
    {error && <div className={styles.badge}>Loading error....</div>}

    {!loading && !error && (
      <div className={styles.badge}>
      <img src={image} alt="Success" />
    </div>
    )}
  </div>
  )
}
