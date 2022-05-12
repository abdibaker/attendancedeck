import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from './pages/login';
import Signup from "./pages/signup";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Signup/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
