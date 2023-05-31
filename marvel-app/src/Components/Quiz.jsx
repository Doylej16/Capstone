import React, { useState } from 'react';
import Navbar from './navbar';

const Quiz = () => {
    const questions = [
		{
			question: 'How many infinity stones are there?',
			answerOptions: [
				{ answers: '2', correct: false },
				{ answers: '4', correct: false },
				{ answers: '6', correct: true },
				{ answers: '5', correct: false },
			],
		},
		{
			question: 'What kind of doctor is Doctor Strange?',
			answerOptions: [
				{ answers: 'Family Physician', correct: false },
				{ answers: 'Neurosurgeon', correct: true },
				{ answers: 'Cardiologist', correct: false },
				{ answers: 'Psychiatrist', correct: false },
			],
		},
		{
			question: 'On what planet was the Soul Stone in Infinity War?',
			answerOptions: [
				{ answers: 'Vormir', correct: true },
				{ answers: 'Mars', correct: false },
				{ answers: 'Xandar', correct: false },
				{ answers: 'Asgard', correct: false },
			],
		},
		{
			question: 'Captain Americas shield and Buckys arm are made of what?',
			answerOptions: [
				{ answers: 'plutonium', correct: false },
				{ answers: 'vibranium', correct: true },
				{ answers: 'titanium', correct: false },
				{ answers: 'helium', correct: false },
			],
		},
        {
			question: 'Nick Fury wears an eye patch over which eye?',
			answerOptions: [
				{ answers: 'both', correct: false },
				{ answers: 'none', correct: false },
				{ answers: 'right', correct: false },
				{ answers: 'left', correct: true },
			],
		},
        {
			question: 'Who did Captain America give his shield to in Endgame?',
			answerOptions: [
				{ answers: 'Iron-Man', correct: false },
				{ answers: 'Superman', correct: false },
				{ answers: 'Spider-man', correct: false },
				{ answers: 'Sam', correct: true },
			],
		},
		{
			question: 'How many years was Steve Rogers trapped under the ice?',
			answerOptions: [
				{ answers: '65', correct: false },
				{ answers: '21', correct: false },
				{ answers: '56', correct: false },
				{ answers: '66', correct: true },
			],
		},
		{
			question: 'What is the name of Thors hammer?',
			answerOptions: [
				{ answers: 'Mjölnir', correct: true },
				{ answers: 'Valhalla', correct: false },
				{ answers: 'Floki', correct: false },
				{ answers: 'Hammer', correct: false },
			],
		},
		{
			question: 'What were the last words said by Thanos in Avengers: Endgame?',
			answerOptions: [
				{ answers: 'I am inevitable', correct: true },
				{ answers: 'I am invincible', correct: false },
				{ answers: 'I am unstoppable', correct: false },
				{ answers: 'I am unavoidable', correct: false },
			],
		},
		{
			question: 'What was the name of Iron Mans first suit?',
			answerOptions: [
				{ answers: 'Mark 1', correct: true },
				{ answers: 'Mat 1', correct: false },
				{ answers: 'Luke 1', correct: false },
				{ answers: 'Greg 1', correct: false },
			],
		},
	];

    const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
	const [showAnswers, setShowAnswers] = useState(false);

	

    const handleAnswerOptionClick = (correct) => {
		if (correct) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};

	const retryQuiz = () => {
		setCurrentQuestion(0);
		setShowScore(false);
		setScore(0);
	  };

	  const checkAnswers = () => {
		setShowAnswers(true);
	  };
	  

  return (
    <>
    <Navbar />
	<div className="main flex justify-center items-center font-mono h-100%"
                      style={{
                        backgroundImage: 'url("/quiz.jpg")',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundAttachment: 'scroll',
                      }}
                    >
    <div className='quiz flex justify-evenly w-400 min-h-200 h-screen rounded bg-white p-20 shadow-stone-800'>
			{showScore ? (
				<div className='score-section flex items-center flex-col text-lg'>
					You scored {score} out of {questions.length}
					<button className="retry-button transition duration-500 ease-in-out bg-gray-600 hover:bg-red-800 transform hover:-translate-y-1 hover:scale-110 text-white font-semibold py-2 px-4 rounded" onClick={retryQuiz}>Retry</button>
					<button className="answer-button transition duration-500 ease-in-out bg-gray-600 hover:bg-red-800 transform hover:-translate-y-1 hover:scale-110 text-white font-semibold py-2 px-4 rounded" onClick={checkAnswers}>Answer</button>
					{showAnswers && (
      <div className="correct-answers">
        <h3 className="text-white mt-4">Correct Answers:</h3>
        <ul>
          {questions.map((question, index) => (
            <li key={index} className="font-mono text-lg">
              {index + 1}. {question.answerOptions.find(option => option.correct)?.answers}
            </li>
          ))}
        </ul>
      </div>
    )}
				</div>
			) : (
				<>
					<div className='question-section relative w-full'>
						<div className='question-count mb-20 text-lg'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text mb-12 text-lg'>{questions[currentQuestion].question}</div>
					</div>
					<div className='answer-section flex flex-col justify-between w-full text-lg'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button className='flex p-3 justify-start items-center rounded text-white w-full transition duration-500 ease-in-out bg-gray-600 hover:bg-red-800 transform hover:-translate-y-1 hover:scale-110' onClick={() => handleAnswerOptionClick(answerOption.correct)}>{answerOption.answers}</button>
						))}
					</div>
				</>
			)}
		</div>
		</div>
        </>
  )
}

export default Quiz