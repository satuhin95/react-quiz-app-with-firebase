import { useEffect, useState } from 'react'
import {getDatabase,ref,query, orderByKey, get } from 'firebase/database'
export default function useQuestions(vedioID) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [questions, setQuestions]= useState([]);
    useEffect(()=>{
        async function fetchQuestions(){
            const db = getDatabase();
            const questionRef = ref(db,"quiz/" + vedioID + "/questions");
            const questionQuery = query( questionRef, orderByKey());
            try {
                setError(false);
                setLoading(true);
                // request for data 
                const snapshot = await get(questionQuery);
                setLoading(false);
                if(snapshot.exists()){
                    setQuestions(snapshot.val());
                    // setQuestions((prevQuestions) => {
                    //     return [...prevQuestions, ...Object.values(snapshot.val())];
                    //   });
                }else{
                       
                }
            } catch (error) {
                console.log(error);
                setLoading(false);
                setError(true)
            }
        }
        
        fetchQuestions();
    },[vedioID])
  return {
    loading,
    error,
    questions,
  };
}
