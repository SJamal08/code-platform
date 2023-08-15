import { Input, Option, Select } from '@material-tailwind/react'
import React, { useEffect, useState } from 'react'
import ExerciseCard from '../../components/ExerciseCard';
import { useAppDispatch, useAppSelector } from '../../logic/store/store';
import { getAllAnswers, getAllExercises, getAnswers, getExercises } from '../../logic/store/features/exerciseSlice';
import { ExerciseAndAnswer } from '../../logic/models/Types';

function ExercisesPage() {

  const dispatch = useAppDispatch();
  const dbExercises = useAppSelector(getExercises);
  const answers = useAppSelector(getAnswers);

  const [coupleListExercises, setcoupleListExercises] = useState<ExerciseAndAnswer[]>([]);

  useEffect(() => {
   dispatch(getAllExercises());
   dispatch(getAllAnswers()); 
  }, [dispatch])

  useEffect(() => {
  const createCoupleList = () => {
    const coupleList : ExerciseAndAnswer[] = [];

    dbExercises.forEach(exercise => {
      const answer = answers.find( answer => answer.idExercise === exercise._id);
      const couple: ExerciseAndAnswer = {
        exercise, answer
      };
      coupleList.push(couple);
      setcoupleListExercises(coupleList);
    });
  };
  createCoupleList();
  }, [answers, dbExercises])
  
  console.log("mes couples en base",coupleListExercises);
  
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
            coupleListExercises.map( (couple, index) => (
              <ExerciseCard couple={couple}  index={index} />
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