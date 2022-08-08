import React, { useEffect, useReducer, useState } from 'react'
import Answers from '../components/Answers'
import ProgressBar from '../components/ProgressBar'
import MiniPlayes from '../components/MiniPlayes'
import { useParams,useNavigate,useLocation  } from 'react-router-dom'
import useQuestions from '../hooks/useQuestions'
import {useAuth} from '../contexts/AuthContext'
import _ from 'lodash';
import { getDatabase, ref, set } from 'firebase/database'
const initialState =null;

const reducer = (state,action)=>{
    switch (action.type) {
      case "questions":
              action.value.forEach((question) => {
              question.options.forEach((option)=>{
                option.checked = false;
              });
            });
            return action.value;
      case "answer":
          const  questions = _.cloneDeep(state);
          questions[action.questionID].options[action.optionIndex].checked = action.value;  
            return questions;
      default:
         return state;
    }
}
;
export default function Quiz() {
  const {id} = useParams();
  const { loading, error,questions} = useQuestions(id);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [qna, dispatch] =useReducer(reducer , initialState);
  const {currentUser} = useAuth();
  let navigate = useNavigate();
  // videoTitle
  const location = useLocation();
  const {videoTitle} = location.state;

  useEffect(()=>{
    dispatch({
      type: "questions",
      value:questions,
    })
  },[questions]);
  function handleAnswerChange(e,index){
      dispatch({
        type:"answer",
        questionID:currentQuestion,
        optionIndex: index,
        value: e.target.checked,
      })
  }
  // next function 
  function nextQuestion(){
    if(currentQuestion + 1 < questions.length){
      setCurrentQuestion(prevCurrent=>prevCurrent + 1);
    }
  }
  // prev question 
  function prevQuestion(){
    if(currentQuestion  >= 1 && currentQuestion <= questions.length){
      setCurrentQuestion(prevCurrent=>prevCurrent - 1);
    }
  }
    // submit function 
   async function submitAns(){
        const {uid} = currentUser;
        const db = getDatabase();
        const resultRef = ref(db, `result/${uid}`);

        await set(resultRef,{
          [id]:qna
        });
        navigate(`/result/${id}`,{state: {qna }} );
      }
   
  // calculate percentage
  const percentage = questions.length > 0 ? ((currentQuestion + 1) /questions.length) * 100 : 0;
  return (
    <>
      {loading && <div>Loading...</div>}
      {error && <div>There was an error!</div>}
      {!loading && !error && qna && qna.length > 0 && (
        <>
          <h1>{qna[currentQuestion].title}</h1>
          <h4>Question can have multiple answers</h4>
          <Answers input={true} options={qna[currentQuestion].options}  handleChange={handleAnswerChange}/> 
          <ProgressBar next={nextQuestion} prev={prevQuestion} progress={percentage} submit={submitAns}/>
           <MiniPlayes videoID={id} title={videoTitle}/>
       </> 
      )}
      
    </>
  )
}
