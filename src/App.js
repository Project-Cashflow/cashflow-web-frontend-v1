import LoginPage from './pages/LoginPage';
import { Route, Routes} from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage/>}></Route>
      
      </Routes>
    </div>
  
  );
}

export default App;
