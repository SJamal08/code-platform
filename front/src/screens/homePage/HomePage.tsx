import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../logic/store/store';
import { getUser } from '../../logic/store/features/authSlice';
import { useSearchParams } from 'react-router-dom';
import { getAllCouples} from '../../logic/store/features/exerciseSlice';
import { ExerciseAndAnswer } from '../../logic/models/Types';

function HomePage() {
    // const dispatch = useAppDispatch();
    
    // useEffect(() => {
    //  dispatch(getAllCouples());
    // }, [dispatch])
  
    // useEffect(() => {

    // }, [answers, dbExercises])
    
    const user = useAppSelector(getUser);

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    // if(!test)
      // return
    const condition = searchParams.get('justloggedIn') === "5";
    // settest(false);
    if (condition) {
      // Une fois le traitement terminé, envoyez un message à la page parent
      // Pour indiquer que le traitement est terminé
      window.opener.postMessage('traitementTermine', 'http://localhost:3000/login');
      console.log("message envoyé")
      window.close();
    }
  }, [searchParams])

  return (
    <div className="App">
      <h1>hello my friend: {user ? user.googleId : ""}</h1>
      <h1 className="text-3xl text-red-500 underline">
      Hello world!
    </h1>
    <div>Tutorial: {searchParams.get('justloggedIn')}</div>

      {/* <button onClick={loginUser}>connect</button> */}
    </div>
  );
}

export default HomePage