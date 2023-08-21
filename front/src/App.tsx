import React, { useEffect, useState } from 'react';
import './App.css';
import { useAppDispatch } from './logic/store/store';
import { authController, setUser } from './logic/store/features/authSlice';
import { setCoupleList } from './logic/store/features/exerciseSlice';

import AppRouter from './Router';
import { answerExerciseController, exerciseController } from './logic/store/features/exerciseSlice';
import { ExerciseAndAnswer } from './logic/models/Types';

function App() {

const dispatch = useAppDispatch();
const [loading, setloading] = useState(true);

  useEffect( () => {
    const loadUser = async () => {
    const user = await authController.me();
    if(user) {
      dispatch(setUser(user));
    }
    };

    const loadCouples  = async () =>{
      const exercises = await exerciseController.getAllExercise();
      const answers = await answerExerciseController.getAllAnswerForOneUser();
      const coupleList: ExerciseAndAnswer[] = [];
      exercises.forEach(exercise => {
          const answer = answers.find( answer => answer.idExercise === exercise._id);
          const couple: ExerciseAndAnswer = {
            exercise, answer
          };
          coupleList.push(couple);
        });
        console.log(coupleList);
        dispatch(setCoupleList(coupleList));
      setloading(false);
    }
    
    loadUser();
    loadCouples();
  }, [dispatch])
  

  return (
    <div className='text-white bg-gray-900 min-h-screen'>
      {
        loading ? 
        (
          <div>loading...</div>
        ): 
        (
          <AppRouter />
        )
      }
    </div>
  )

}

export default App;
