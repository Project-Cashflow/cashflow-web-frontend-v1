import LoginPage from './pages/LoginPage';
import Agreement from './pages/Agreement';
import SignUp from './pages/SignUp';
import { Route, Routes} from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<LoginPage/>}></Route>
        <Route path="/agreement" element={<Agreement/>}></Route>
        <Route path="/signup" element={<SignUp/>}></Route>
      
      </Routes>
    </div>
  
  );
}

export default App;
