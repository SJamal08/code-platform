import React from 'react'
import { Exercise } from '../logic/models/Exercise'
import { AnswerExercise } from '../logic/models/AnswerExercise'
import { ExerciseAndAnswer } from '../logic/models/Types'
import { useNavigate } from 'react-router-dom'

function ExerciseCard({couple, index}: {couple: ExerciseAndAnswer, index: number}) {

    const navigate = useNavigate();

    const status = couple.answer?.status || "to-do";
    const title = couple.exercise.title;
    const isValidated = couple.answer?.isValidated || false;
    // const acceptance = couple.answer?.acceptance.js
    const acceptance = 0;
    const difficulty = couple.exercise.difficulty;
    const id = couple.exercise._id;
  return (
    <div onClick={() => navigate(`/exercises/${id}`)} className={`${(index+1) % 2 === 0 ? "bg-gray-700": ""} p-2 flex flex-row gap-16 cursor-pointer`}>
        <div>
            <h2>
                {status}
            </h2>
        </div>
        <div>
            <h2>
                {title}
            </h2>
        </div>
        <div>
            <h2>
                {isValidated ? "oui": "non"}
            </h2>
        </div>
        <div>
            <h2>
                {`${acceptance}%`}
            </h2>
        </div>
        <div>
            <h2>
                {difficulty}
            </h2>
        </div>
    </div>
  )
}

export default ExerciseCard