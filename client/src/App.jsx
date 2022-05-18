import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/home';
import Login from './pages/auth/login';
import Signup from "./pages/auth/signup";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Signup/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/home" element={<Home/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
