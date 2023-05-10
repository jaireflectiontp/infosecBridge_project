import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Account from './components/Pages/AccountPage/Account';
import LandingPage from './components/Pages/LandingPage/LandingPage';
import Signup from './components/Pages/SignupPage/Signup';
import Signin from './components/Pages/SigninPage/Signin';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<LandingPage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/user-acc" element={<Account />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
