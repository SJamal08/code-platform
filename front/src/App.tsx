import React from 'react';
import './App.css';
import { useAppDispatch, useAppSelector } from './logic/store/store';
import { getUser, login } from './logic/store/features/authSlice';

function App() {

  const user = useAppSelector(getUser);
  const dispatch = useAppDispatch();

  const loginUser = () => {
    dispatch(login())
  }
  return (
    <div className="App">
      <h1>hello my friend: {user ? user.googleId : ""}</h1>
      <button onClick={loginUser}>connect</button>
    </div>
  );
}

export default App;
