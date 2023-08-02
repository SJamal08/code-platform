import { Input, Option, Select } from '@material-tailwind/react'
import React from 'react'
import ExerciseCard from '../../components/ExerciseCard';

function ExercisesPage() {

  const exercisesList = [
    {
      id: 0,
      title: "titre banal",
      isValidated: true,
      acceptance: 75,
      difficulty: "Medium",
      status: "to-do"
    },
    {
      id: 1,
      title: "titre banal",
      isValidated: true,
      acceptance: 75,
      difficulty: "Medium",
      status: "to-do"
    },
    {
      id: 2,
      title: "titre banal",
      isValidated: true,
      acceptance: 75,
      difficulty: "Medium",
      status: "to-do"
    },
    {
      id: 3,
      title: "titre banal",
      isValidated: true,
      acceptance: 75,
      difficulty: "Medium",
      status: "to-do"
    },
    {
      id: 4,
      title: "titre banal",
      isValidated: true,
      acceptance: 75,
      difficulty: "Medium",
      status: "to-do"
    },
    {
      id: 5,
      title: "titre banal",
      isValidated: true,
      acceptance: 75,
      difficulty: "Medium",
      status: "to-do"
    },
    {
      id: 6,
      title: "titre banal",
      isValidated: true,
      acceptance: 75,
      difficulty: "Medium",
      status: "to-do"
    },
    {
      id: 7,
      title: "titre banal",
      isValidated: true,
      acceptance: 75,
      difficulty: "Medium",
      status: "to-do"
    },
    {
      id: 8,
      title: "titre banal",
      isValidated: true,
      acceptance: 75,
      difficulty: "Medium",
      status: "to-do"
    },
    {
      id: 9,
      title: "titre banal",
      isValidated: true,
      acceptance: 75,
      difficulty: "Medium",
      status: "to-do"
    },
    {
      id: 10,
      title: "titre banal",
      isValidated: true,
      acceptance: 75,
      difficulty: "Medium",
      status: "to-do"
    },
  ]
  return (
    <div className='flex h-full'>
      {/* left side */}
      <div className='w-2/3 m-6 rounded-xl h-full'>
        left side
        {/* filter case */}
        <div className='p-2 m-2 space-y-2'>
          <div className="flex w-auto flex-row space-x-2">
            <Select size="md" label="Select Version">
              <Option>Material Tailwind HTML</Option>
              <Option>Material Tailwind React</Option>
              <Option>Material Tailwind Vue</Option>
              <Option>Material Tailwind Angular</Option>
              <Option>Material Tailwind Svelte</Option>
            </Select>

            <Select size="md" label="Select Version">
              <Option>Material Tailwind HTML</Option>
              <Option>Material Tailwind React</Option>
              <Option>Material Tailwind Vue</Option>
              <Option>Material Tailwind Angular</Option>
              <Option>Material Tailwind Svelte</Option>
            </Select>
            <Select size="md" label="Select Version">
              <Option>Material Tailwind HTML</Option>
              <Option>Material Tailwind React</Option>
              <Option>Material Tailwind Vue</Option>
              <Option>Material Tailwind Angular</Option>
              <Option>Material Tailwind Svelte</Option>
            </Select>
          </div>
          <div className="w-full">
            <Input label="Input With Icon" icon={<i className="fas fa-heart" />} />
          </div>
        </div>
        {/* display exercises list */}
        <div className='flex flex-col'>
          <div className='p-2 flex flex-row gap-16'>
            <div><h2>Status</h2></div>
            <div><h2>title</h2></div>
            <div><h2>validated</h2></div>
            <div><h2>Acceptance</h2></div>
            <div><h2>Difficulty</h2></div>
          </div>

          {
            exercisesList.map( exercise => (
              <ExerciseCard exercise={exercise} />
            ))
          }
        </div>
      </div>

      {/* right side */}
      <div className='bg-gray-700 w-1/3 m-6 rounded-xl'>
        right side
        {/* global metrics */}
        <div>

        </div>
      </div>
    </div>
  )
}

export default ExercisesPage