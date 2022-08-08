import React, { useState } from 'react'
// import styles from '../styles/Videos.module.css'
import Video from './Video'
import useVideoList from '../hooks/useVideoList'
import { Link } from 'react-router-dom'
import InfiniteScroll from 'react-infinite-scroll-component';
import styles from '../styles/Videos.module.css'
export default function Videos() {
  // const [page, setPage] = useState(1);
  const {loading, error, videos} = useVideoList();
 
  return (
    <div className={styles.videos}>
          {videos?.length > 0 && 
                   videos.map((video)=> 
                 
                   video.noq > 0 ?(
                    <Link to={`/quiz/${video.youtubeID}`} state={{videoTitle: video.title}} key={ video.youtubeID}>
                        <Video title={video.title} id={video.youtubeID} noq={video.noq}/>
                      </Link>
                  ):(
                     <Video key={ video.youtubeID} title={video.title} id={video.youtubeID} noq={video.noq}/>
                  )
                  )
          }
       
        {!loading && videos?.length === 0 && <div className="info" >Data not found!</div>}
         {error &&  <div className="info" >There was an error!</div>}
         {loading &&  <div className="info" >Loading...</div>}
       
    </div>
  )
}
