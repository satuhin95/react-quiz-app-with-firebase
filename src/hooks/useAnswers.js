import { useEffect, useState } from 'react'
import {getDatabase,ref,query, orderByKey, get, startAt, limitToFirst} from 'firebase/database'
export default function useAnswers(vedioID) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [answers, setAnswers]= useState([]);
    useEffect(()=>{
        async function fetchAnswers(){
            const db = getDatabase();
            const answerRef = ref(db,"answers/" + vedioID + "/questions");
            const answerQuery = query( answerRef, orderByKey());
            try {
                setError(false);
                setLoading(true);
                // request for data 
                const snapshot = await get(answerQuery);
                setLoading(false);
                if(snapshot.exists()){
                    setAnswers(snapshot.val());
                }else{
                       
                }
            } catch (error) {
                console.log(error);
                setLoading(false);
                setError(true)
            }
        }
        
        fetchAnswers();
    },[vedioID])
  return {
    loading,
    error,
    answers,
  };
}
