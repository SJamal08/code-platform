import React from 'react'

function ExerciseCard({exercise}: {exercise: {id: number, title: string, isValidated: boolean, acceptance: number, difficulty: string, status: string}}) {
  return (
    <div className={`${(exercise.id+1) % 2 === 0 ? "bg-gray-700": ""} p-2 flex flex-row gap-16 `}>
        <div>
            <h2>
                {exercise.status}
            </h2>
        </div>
        <div>
            <h2>
                {exercise.title}
            </h2>
        </div>
        <div>
            <h2>
                {exercise.isValidated ? "oui": "non"}
            </h2>
        </div>
        <div>
            <h2>
                {`${exercise.acceptance}%`}
            </h2>
        </div>
        <div>
            <h2>
                {exercise.difficulty}
            </h2>
        </div>
    </div>
  )
}

export default ExerciseCard