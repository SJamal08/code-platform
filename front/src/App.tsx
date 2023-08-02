import React, { useEffect, useState } from 'react';
import './App.css';
import { useAppDispatch } from './logic/store/store';
import { getCurrentUser } from './logic/store/features/authSlice';
import AppRouter from './Router';

function App() {

const dispatch = useAppDispatch();
const [loading, setloading] = useState(true);

  const loadUser = async () => {
    await dispatch(getCurrentUser());
    setloading(false);
  };
  
  loadUser();

  return (
    <div className='text-white bg-gray-900'>
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
