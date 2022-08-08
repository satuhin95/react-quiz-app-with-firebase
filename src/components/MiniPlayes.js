import React, { useRef, useState } from 'react'
import styles from '../styles/MiniPlayer.module.css'
import ReactPlayer from 'react-player/youtube'
export default function MiniPlayes({videoID,title}) {
  const buttonRef = useRef();
  const [status, setStatus] = useState(false);
  function toggleMiniPlayer(){
    if(!status){
      buttonRef.current.classList.remove(styles.floatingBtn);
      setStatus(true);
    }else{
      buttonRef.current.classList.add(styles.floatingBtn);
      setStatus(false);
    }
  }
  return (
    <div className={`${styles.miniPlayer} ${styles.floatingBtn}`} ref={buttonRef} onClick={toggleMiniPlayer}>
      <span className={`material-icons-outlined ${styles.open}`}> play_circle_filled </span>
      <span className={`material-icons-outlined ${styles.close}`} onClick={toggleMiniPlayer}> close </span>
      <ReactPlayer   url={`https://www.youtube.com/watch?v=${videoID}`} controls playing={status} width="300px" height="168px" />
      <p>{title}</p>
  </div>
  )
}
