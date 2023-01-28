import Navbar from './components/Navbar/Navbar.js';
import TaskList from './components/Tasklist/Task';
import Home from './components/Home/Home';
import SignUp from './components/Signup/signup.js';
import Login from './components/Authentication/Auth';

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
	  <Route exact path="/" exact element={<Home/>} />
	  <Route path="/login" element={<Login/>} />
	  <Route path="/signup" element={<SignUp/>} />
          <Route path="/tasklist" element={<TaskList/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;

