import {useState} from 'react'
import './AnswerChoice.css'

import styled from "styled-components/macro"

const AnswerChoice = (props) => {
   if (props.correct) {
      return <CorrectAnswerChoice {...props} />
   } else {
      return <IncorrectAnswerChoice {...props} />
   }
}

const CorrectAnswerChoice = (props) => {
   const [selected, setSelected] = useState(false)

   const onSelect = () => {
      setSelected(true)
      props.onSelect()
   }

   return (
      <li className="answerChoice correctAnswerChoice" onClick={() => onSelect()} css={`
         ${props.questionAnswered ? 'background-color: #7ae47a;' : ''}
         &:hover {
            ${!selected && !props.questionAnswered ? 'background-color: #ddebc5;' : ''}
         }
      `}>
         {/* <input type="radio" id={props.choice} name="Quiz" value={props.choice} /> */}

         <div css={`
            display: flex;
            align-items: baseline;
         `}>
            <h3 className="answerIndex">
               {props.answerIndex}.
            </h3>
            <p>
               {props.choice}
            </p>
         </div>
         {
            props.questionAnswered &&
            <p>
               {props.info}
            </p>
         }
      </li>
   )
}

const IncorrectAnswerChoice = (props) => {
   const [selected, setSelected] = useState(false)

   const onSelect = () => {
      setSelected(true)
      props.onSelect()
   }

   return (
      <li className="answerChoice" onClick={() => onSelect()} css={`
         ${selected ? 'background-color: red;' : ''}
         &:hover {
            ${!selected && !props.questionAnswered ? 'background-color: #ddebc5;' : ''}
         }
      `}>
         {/* <input type="radio" id={props.choice} name="Quiz" value={props.choice} /> */}
         <div css={`
            display: flex;
            align-items: baseline;
         `}>
            <h3 className="answerIndex">
               {props.answerIndex}.
            </h3>
            <p>
               {props.choice}
            </p>
         </div>
      </li>
   )
}

export default AnswerChoice
