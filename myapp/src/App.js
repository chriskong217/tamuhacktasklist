import Navbar from './components/Navbar/Navbar.js';
import TaskList from './components/Tasklist/Task';
import Home from './components/Home/Home';
import SignUpForm from './components/Signup/Signup.js';
import Login from './components/Authentication/Auth';

import useToken from './useToken';

import { useState } from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  const { token, setToken } = useToken();

  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
	  <Route exact path="/" exact element={<Home/>} />
	  <Route path="/login" element={<Login/>} />
	  <Route path="/signup" element={<SignUpForm/>} />
          <Route path="/tasklist" element={<TaskList/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;

