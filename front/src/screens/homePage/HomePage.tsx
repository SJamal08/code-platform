import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../logic/store/store';
import { getCurrentUser, getUser } from '../../logic/store/features/authSlice';
import { useSearchParams } from 'react-router-dom';

function HomePage() {
    const dispatch = useAppDispatch();

    useEffect(() => {
      dispatch(getCurrentUser());
    }, [dispatch]);

    const user = useAppSelector(getUser);
    
  // const loginUser = () => {
  //   dispatch(getCurrentUser())
  // }

  const [searchParams, setSearchParams] = useSearchParams();

  // const [test, settest] = useState(true)
  // return (
  // )
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