import Navbar from './components/Navbar/Navbar.js';
import TaskList from './components/Tasklist/Task';
import Home from './components/Home/Home';
import SignUp from './components/signup.js';

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
	  <Route exact path="/" exact element={<Home/>} />
	  <Route path="/signup" element={<SignUp/>} />
          <Route path="/tasklist" element={<TaskList/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;

