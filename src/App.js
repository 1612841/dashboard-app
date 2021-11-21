import React from 'react';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Login from './components/Pages/Logins/Login';
import LoginBox from './components/Pages/LoginsBox/LoginBox';
import Register from './components/Pages/Register/Register';
import Registerbox from './components/Pages/RegisterBox/Registerbox';
import {
  createBrowserHistory,
  createHashHistory,
  createMemoryHistory
} from 'history' 
import Mail from './components/Application/Mail/Mail';
import Menu from './components/Menu/Menu';
import ForgotPass from './components/Pages/ForgotPass/ForgotPass';

function App(props) {
  return (
    <> 
      <Router>
          <Routes >
            <Route path="/login" element={<Login />} />
            <Route path="/loginboxed" element={<LoginBox />} />
            <Route path="/register" element={<Register />} />
            <Route path="/registerboxed" element={<Registerbox />} />
            <Route path="/forgotpassword" element={<ForgotPass />} />
          </Routes>
          <Menu />
          <Routes>
            <Route path='/mailbox' element={<Mail />} /> 
          </Routes>
      </Router>
    </>
  );
}

export default App;
