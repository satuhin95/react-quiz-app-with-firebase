import React, { useRef, useState } from 'react'
import styles from '../styles//ProgressBar.module.css'
import Button from './Button'
export default function ProgressBar({progress,next,prev ,submit}) {
  const [tooltip , setTooltip] = useState(false);
  const tooltipRef = useRef();
  function toggleTooltip(){
    if(tooltip){
      setTooltip(false);
      tooltipRef.current.style.display = "none";
    }else{
      setTooltip(true);
      tooltipRef.current.style.display = "block";
      tooltipRef.current.style.left = `cale(${progress}% - 65px)`;
    }
  }
  return (
    <div className={styles.progressBar}>
          <div className={styles.backButton} onClick={prev}>
            <span className="material-icons-outlined"> arrow_back </span>
          </div>
          <div className={styles.rangeArea}>
            <div className={styles.tooltip} ref={tooltipRef}>{progress}% Complete!</div>
            <div className={styles.rangeBody}>
              <div className={styles.progress} style={{width: `${progress}%`}} onMouseOut={toggleTooltip} onMouseOver={toggleTooltip}
              ></div>

            </div>
          </div>
            <Button className={ styles.next} onClick={progress === 100 ? submit : next}>
              <span>{progress === 100 ? "Submit Quiz" : "Next Question" }</span>
              <span className="material-icons-outlined"> arrow_forward </span>
            </Button>
    </div>
  )
}
