import React, { useEffect, useState } from 'react';
import './App.css';
import { useAppDispatch } from './logic/store/store';
import { authController, setUser } from './logic/store/features/authSlice';

import AppRouter from './Router';

function App() {

const dispatch = useAppDispatch();
const [loading, setloading] = useState(true);

  useEffect(() => {
    const loadUser = async () => {
    const user = await authController.me();
    dispatch(setUser(user));
    setloading(false);
    };
    
    loadUser();
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
