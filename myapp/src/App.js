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
	  <Route path="/" component={Home} />
	  <Route path="/signup" component={SignUp} />
          <Route path="/tasklist" component={TaskList} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;

