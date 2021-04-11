import AnswerChoice from "../AnswerChoice/AnswerChoice";
import './QuizQuestion.css'

const QuizQuestion = ({ question, questionInd, handleSelect, questionAnswered }) => {
	const onSelect = (choice) => {
      let check = choice === question.choices[question.answerInd]

		if (check) {
			console.log('Correct!');
         // Highlight red
         // Highlight correc answer
         // Update score
         // Alert quiz component question has been answered
		} else {
			console.log('Incorrect!');
         //Same as above
		}

      handleSelect(check)
	};

	return (
		<div className="quizQuestion">
         <div>
			   <h2 className="quizQuestionHeader">{question.q}</h2>
         </div>
			<ul className="answerChoiceList">
				{question.choices.map((choice, i) => {
               let check = choice === question.choices[question.answerInd]

               return <AnswerChoice key={`${questionInd}choice${i}`} answerIndex={i+1} choice={choice} info={check ? question.info : null}
                  correct={check} onSelect={() => onSelect(choice)} questionAnswered={questionAnswered}/>
            })}
			</ul>
		</div>
	);
};

export default QuizQuestion;
