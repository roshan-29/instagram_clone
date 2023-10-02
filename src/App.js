import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage/loginpage';
import Homepage from './Homepage/homepage';




function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<Homepage />} />
       
      </Routes>
    </Router>
  );
}

export default App;