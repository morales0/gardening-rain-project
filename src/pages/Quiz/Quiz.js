import React, { useState } from 'react'

let questions = [
   {
      type: "MC",
      q: "What is 2 + 2?",
      choices: ["5", "Apple", "Barcelona sucks"],
      answer: "5",
      answerInd: 0
   },
   {
      type: "Answer",
      q: "What should our team name be?",
      answer: "Point Gardener"
   }
]
const Quiz = () => {
   const [score, setScore] = useState(0)
   const [question, setQuestion] = useState(0)

   return (
      <div>
         <div>
            <div>Score: {score}</div>
            <div>Question Number: {question}</div>
         </div>

         <div>
            <h2>{questions[question].q}</h2>
            {
               questions[question].type === "MC" ? (
                  <ul>
                     {questions[question].choices.map()}
                  </ul>
               ) : <div>Nothing</div>
               
            }
         </div>
      </div>
   )
}

export default Quiz
