import Navbar from './components/Navbar/Navbar.js';
import TaskList from './components/Tasklist/Task';
import Home from './components/Home/Home';
import Login from './components/Authentication/Auth';
import Logout from './components/Logout/Logout';

import axios from 'axios';

import { useState, useEffect } from 'react';

import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom'

import PrivateRoute from './Utils/PrivateRoute';
import PublicRoute from './Utils/PublicRoute';
import { getToken, removeUserSession, setUserSession, getUser } from './Utils/Common';

function App() {
  const [authLoading, setAuthLoading] = useState(true);
 
  useEffect(() => {
    const token = getToken();
    if (!token) {
      return;
    }
 
    axios.get(`http://localhost:4000/verifyToken?token=${token}`).then(response => {
      setUserSession(response.data.token, response.data.user);
      setAuthLoading(false);
    }).catch(error => {
      removeUserSession();
      setAuthLoading(false);
    });
  }, []);
 
  if (authLoading && getToken()) {
    return <div className="content">Checking Authentication...</div>
  }

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
	<Route exact path="/" exact element={<Home/>} />
	<Route path="/login" element={<Login/>} />
	<Route path="/tasklist" element={
	  (getUser() != null) ? (
	    <TaskList/>
	  ) : (
	    <Navigate replace to="/login" />
	  )
	} />
	<Route path="/logout" element={<Logout/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

