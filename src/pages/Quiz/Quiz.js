import React, { useState } from 'react'

import './Quiz.css'
import styled from 'styled-components/macro'
import { QuizQuestion } from '../../components'
import questions from '../../data/questions'

const Quiz = () => {
   const [score, setScore] = useState(0)
   const [question, setQuestion] = useState(questions[0])
   const [questionIndex, setQuestionIndex] = useState(0)
   const [questionAnswered, setQuestionAnswered] = useState(false)

   const handleSelect = (ans) => {
      // Update score if correct and hasn't answered yet
      if(!questionAnswered){
         setQuestionAnswered(true)

         if (ans) {
            setScore(score + 1)
         }
      }
   }

   const handleNext = () => {
      setQuestion(questions[questionIndex + 1])
      setQuestionIndex(questionIndex + 1)
      setQuestionAnswered(false)
   }

   const handlePrev = () => {
      setQuestion(questions[questionIndex - 1])
      setQuestionIndex(questionIndex - 1)
      setQuestionAnswered(false)
   }

   return (
      <div className="Quiz">
         <div className="QuizBox">
            <div css={`
               display: flex;
               justify-content: space-between;
            `}>
               <div>Question Number: {questionIndex + 1}</div>
               <div>Score: {score}</div>
            </div>
            <QuizQuestion question={question} questionInd={questionIndex} handleSelect={handleSelect} questionAnswered={questionAnswered}/>
            {
               questionAnswered &&
               <div css={`
                  display: flex;
                  justify-content: space-between;
                  margin-top:6px;

                  & button {
                     padding: 8px;
                     background: none;
                     border: 1px solid black;
                     border-radius: 3px;
                     cursor: pointer;
                  }

                  & button:hover {
                     background: #444;
                     color: white;
                  }
               `}>
                  <div>{questionIndex !== 0 && <button onClick={() => handlePrev()}>Previous</button>}</div>
                  <div>{questionIndex !== questions.length - 1 && <button onClick={() => handleNext()}>Next</button>}</div>
               </div>
            }
         </div>
      </div>
   )
}

export default Quiz
