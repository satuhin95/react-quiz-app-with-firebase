import  { useEffect, useState } from 'react'
import {getDatabase,ref,query, orderByKey, get} from 'firebase/database'
export default function useVideoList() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [videos, setVideos]= useState();
    const [hasMore, sethasMore]= useState(true);
    useEffect(()=>{
        async function fetchVideos(){
            const db = getDatabase();
            const videoref = ref(db,'videos');
            const videoQuery = query(
                videoref,
                orderByKey(),
            )
            try {
                setError(false);
                setLoading(true);
                // request for data 
                const snapshot = await get(videoQuery);
                setLoading(false);
                if(snapshot.exists()){
                        // setVideos((prevVideos)=>{
                        //     return [...prevVideos, ...Object.values(snapshot.val())];    
                        // })
                        setVideos(snapshot.val());
                }else{
                        sethasMore(false)
                }
            } catch (error) {
                console.log(error);
                setLoading(false);
                setError(true)
            }
        }
        
        fetchVideos();
    },[])
  return {
    loading,
    error,
    videos,
    hasMore
  };
}
