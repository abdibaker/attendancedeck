import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Signin from './pages/signin';
import SignUp from "./pages/signup";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<SignUp/>}/>
          <Route path="/signin" element={<Signin/>}/>
          <Route path="/signup" element={<SignUp/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
