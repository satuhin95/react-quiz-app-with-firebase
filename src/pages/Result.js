import React from 'react'
import Analysis from '../components/Analysis'
import Summary from '../components/Summary'
import useAnswers from '../hooks/useAnswers'
import {useLocation, useParams} from 'react-router-dom';
import _ from 'lodash';
export default function Result() {
  const {id} = useParams();
  const {answers,loading,error} = useAnswers(id);
  const {state} = useLocation();
  const qna= state.qna;

  function calculate(){
    let score = 0;
    answers.forEach((qusetion, index1)=>{
      let correctIndexs =[], checkedindexes=[];

     qusetion.options.forEach((option,index2)=>{
      if(option.correct) correctIndexs.push(index2);
      if (qna[index1].options[index2].checked) {
        checkedindexes.push(index2);
        option.checked = true;
      }
     }); 
     if(_.isEqual(checkedindexes, correctIndexs)){
        score = score + 5;
     }
    })
    return score;
  }
  const userScore = calculate();
  return (
    <>
    {loading && <div>Loading...</div>}
    {error && <div>There was an error!</div>}
    {answers && answers.length > 0 && (
      <>
        <Summary score={userScore} noq={answers.length}/>
        <Analysis answers={answers}/>
      </>
    )}
       
    
    </>
  )
}
